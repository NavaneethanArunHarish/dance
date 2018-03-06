const passport = require('passport');
const request = require('request');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const OAuthStrategy = require('passport-oauth').OAuthStrategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var authData = require('./OAuthConfig');
const User = require('../Models/user_model');
var jsonwebtoken = require("jsonwebtoken");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });
}));

/**
 * Sign in with Facebook.
 */
passport.use(new FacebookStrategy({
    clientID: authData.facebookAuth.clientID,
    clientSecret: authData.facebookAuth.clientSecret,
    callbackURL: authData.facebookAuth.callbackURL,
    profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
    passReqToCallback: true
}, (req, res, accessToken, refreshToken, profile, done) => {
    if (req.user) {
        User.findOne({ facebook: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                res.json({ message: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                User.findById(req.user.id, (err, user) => {
                    if (err) { return done(err); }
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken });
                    user.profile.name = user.profile.name || `${profile.name.givenName} ${profile.name.familyName}`;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || `https://graph.facebook.com/${profile.id}/picture?type=large`;
                    user.save((err) => {
                        res.json({
                            message: 'Facebook account has been linked.',
                            token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs')
                        });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        User.findOne({ facebook: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                return done(null, existingUser);
            }
            User.findOne({ email: profile._json.email }, (err, existingEmailUser) => {
                if (err) { return done(err); }
                if (existingEmailUser) {
                    res.json({ message: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
                    done(err);
                } else {
                    const user = new User();
                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken });
                    user.profile.name = `${profile.name.givenName} ${profile.name.familyName}`;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                    user.profile.location = (profile._json.location) ? profile._json.location.name : '';
                    user.save((err) => {
                        res.json({
                            message: 'Facebook account has been linked',
                            token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs')
                        });

                        done(err, user);
                    });
                }
            });
        });
    }
}));

// Sign in with Twitter.

passport.use(new TwitterStrategy({
    consumerKey: authData.twitterAuth.consumerKey,
    consumerSecret: authData.twitterAuth.consumerSecret,
    callbackURL: authData.twitterAuth.callbackURL,
    passReqToCallback: true
}, (req, res, accessToken, tokenSecret, profile, done) => {
    if (req.user) {
        User.findOne({ twitter: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                res.json({ msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                User.findById(req.user.id, (err, user) => {
                    if (err) { return done(err); }
                    user.twitter = profile.id;
                    user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.location = user.profile.location || profile._json.location;
                    user.profile.picture = user.profile.picture || profile._json.profile_image_url_https;
                    user.save((err) => {
                        if (err) { return done(err); }
                        res.json({
                            msg: 'Twitter account has been linked.',
                            token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs')
                        });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        User.findOne({ twitter: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                return done(null, existingUser);
            }
            const user = new User();
            user.email = `${profile.username}@twitter.com`;
            user.twitter = profile.id;
            user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
            user.profile.name = profile.displayName;
            user.profile.location = profile._json.location;
            user.profile.picture = profile._json.profile_image_url_https;
            user.save((err) => {
                done(err, user);
            });
        });
    }
}));

/**
 * Sign in with Google.
 */
passport.use(new GoogleStrategy({
    clientID: authData.googleAuth.clientID,
    clientSecret: authData.googleAuth.clientSecret,
    callbackURL: authData.googleAuth.callbackURL,
    passReqToCallback: true
}, (req, res, accessToken, refreshToken, profile, done) => {
    if (req.user) {
        User.findOne({ google: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                res.json({ message: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                User.findById(req.user.id, (err, user) => {
                    if (err) { return done(err); }
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || profile._json.image.url;
                    user.save((err) => {
                        res.json({
                            message: 'Google account has been linked.',
                            token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs')
                        });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        User.findOne({ google: profile.id }, (err, existingUser) => {
            if (err) { return done(err); }
            if (existingUser) {
                return done(null, existingUser);
            }
            User.findOne({ email: profile.emails[0].value }, (err, existingEmailUser) => {
                if (err) { return done(err); }
                if (existingEmailUser) {
                    res.json({ message: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
                    done(err);
                } else {
                    const user = new User();
                    user.email = profile.emails[0].value;
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.save((err) => {
                        done(err, user);
                    });
                }
            });
        });
    }
}));

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split('/').slice(-1)[0];
    const token = req.user.tokens.find(token => token.kind === provider);
    if (token) {
        next();
    } else {
        res.redirect(`/auth/${provider}`);
    }
};
