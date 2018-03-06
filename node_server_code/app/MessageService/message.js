const twilio = require('twilio');
const message = require('../config/twilioConfig.js')

var client = twilio(message.TWILIO_ACCOUNT_SID, message.TWILIO_AUTH_TOKEN);

module.exports.sendMessage = function (req, res) {

    client.messages.create({
        to: req.body.number,
        from: message.TWILIO_NUMBER,
        body: 'Hello from KK Dance School'
    }, (err) => {
        if (err) {

            res.status(400).send('Message not sent');
        }
        res.status(200).send('Message sent');
    });
}