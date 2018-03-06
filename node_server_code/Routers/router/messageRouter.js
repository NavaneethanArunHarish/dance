var express = require("express");
var router = express.Router();
var messageService = require("../../app/MessageService/message");
var emailmessageService = require("../../app/MessageService/emailMessage");
var authentication = require("../../app/MessageService/authentication");
var google = require("../../app/MessageService/googleCalander");

router.post("/sendSMSMessage",messageService.sendMessage);
router.post("/sendEmailMessage",emailmessageService.sendEmailMessage);
router.post("/sendAuthenticationCode",authentication.sendVerificationCode);
//router.post("/verifyAuthenticationCode",authentication.checkVerificationCode);
// router.post("/sendEvent",google.sendEvent);

module.exports = router;