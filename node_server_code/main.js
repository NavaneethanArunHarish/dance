var express = require("express");
var app = express();
var http = require("http");
var path = require("path");
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");
var flash = require("connect-flash");
const passport = require("passport");
var clientPath = path.resolve(__dirname, "client");
const passportConfig = require('./app/config/passport');
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var router = require("./Routers/route");
var User = require('./app/Models/user_model'),
jsonwebtoken = require("jsonwebtoken");
var Users = require('./app/Models/user_model')

var swaggerJSDoc = require('swagger-jsdoc');


// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Schedule App  API',
      version: '1.0.0',
      description: 'RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
  };

    // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./Swagger/*.js'],
  };



  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

  // serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });


app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
    next();
  }
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err)
      req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'Ashwin Achu'
}));

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.json({"message":"Facebook Account Linked"});
});
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.json({"message":"Google Account Linked"});
});
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
  res.json({"message":"Twitter Account Linked"});
});
app.use("/api",router);
app.all("*", function(req, res) {
  res.status(200);
});

//mongoose.connect("mongodb://210.18.139.81:27017/smallplayers");
mongoose.connect("mongodb://localhost:27017/smallplayers");
mongoose.connection.once("connected", function() {
  console.log("Connected to database");
});

app.listen(port);
console.log("Express server listening on port " + port);
