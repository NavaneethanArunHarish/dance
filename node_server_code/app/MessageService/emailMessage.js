const emailMessage = require('../config/sendgridConfig.js')
const sgMail = require('@sendgrid/mail');

module.exports.sendEmailMessage = function (request, response) {

    sgMail.setApiKey(emailMessage.SENDGRID_API_KEY);

    sgMail.send({
        to: request.body.to,
        from: request.body.from,
        subject: request.body.subject,
        html: '<h2>Ashwin, Greetings From KK Dance School</h2>',
    }, function (err, data) {
        response.send('Email Sent');
    });
};