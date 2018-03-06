const authy = require('../config/authyConfig.js')

module.exports.sendVerificationCode = function (req, res, callback) {
    const request = require('request');
    console.log("Phone Number: ", req.body.phone_number);
    console.log("Country Code: " + req.body.country_code);
    var options = {
        url: 'https://api.authy.com/protected/json/phones/verification/start',
        method: 'POST',
        form: {
            'api_key': authy.AUTHY_TOKEN,
            'country_code': req.body.country_code,
            'phone_number': req.body.phone_number,
            'via': 'sms'
        }
    }
    request(options, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            console.log("Phone Information: " + body);
        } else {
            console.log("ERROR: " + error);
        }
        callback(body);
    })
};

module.exports.checkVerificationCode = function (req, res, callback) {
    const request = require('request');
    console.log("Phone Number: ", req.body.phone_number);
    console.log("Country Code: " + req.body.country_code);
    console.log("Verification Code: " + req.body.verification_code);
    var options = {
        url: 'https://api.authy.com/protected/json/phones/verification/check',
        method: 'GET',
        form: {
            'api_key': authy.AUTHY_TOKEN,
            'country_code': req.body.country_code,
            'phone_number': req.body.phone_number,
            'verification_code': req.body.verification_code
        }
    }
    request(options, function (error, res, body) {
        if (!error && res.statusCode == 200) {
            console.log("Phone Information: " + body);
        } else {
            console.log("ERROR: " + error);
        }
        callback(body);
    })
}; 