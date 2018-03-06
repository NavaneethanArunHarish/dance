const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const graph = require('fbgraph');
const passport = require('passport');
const User = require('../Models/user_model');
const service = require("../Services/user_Service")
var wrapper = require('../../app/constants/wrapper')
var jsonwebtoken = require("jsonwebtoken");
var winston = require('winston')


exports.logout = (req, res) => {
  req.logout();
  res.status(200).send({
    message: wrapper.LoggedOut
  })
};
exports.postSignup = (req, res, next) => {
  //console.log("req-------------------->",req)
  service.getall_user(function (detail) {
    console.log("user count---------------->", detail.length);
    var usercount = detail.length + 1;

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      dob: req.body.dob,
      userId: usercount,
      category_id: req.body.category_id,
      sub_category_id: req.body.sub_category_id,
      user_type: req.body.user_type,
      location: req.body.location,
      age: req.body.age,
      instructor_name: req.body.instructor_name,
      batch_schedule: req.body.batch_schedule,
      batch_start_date: req.body.batch_start_date,
      address: req.body.address,
      payment: req.body.payment,
      payment_due_date: req.body.payment_due_date,
      batch_time: req.body.batch_time
    });
    //console.log("res-------------------->",res)
    User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      if (existingUser) {
        return res.json({ message: "Already email exists" })
      }
      user.save((err) => {
        winston.info('saved')
        if (err) { res.json({ message: "Failed" }) }
        req.logIn(user, (err) => {
          if (err) {
            res.json({ message: "Failed" })
          }
          res.json({
            result: user,
            message: "Account Created Successfully"
          })
        });
      });
    });
  });
};

exports.postLogin = (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) { return res.json({ message: "Error Logging In" }) }
    if (!user) {
      return res.json({ message: "You are not a user" })
    }
    req.logIn(user, (err) => {
      if (err) { res.json({ message: "Error Logging In" }) }
      res.json({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: {
          token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs'),
          user: user.toJSON()
        }
      });
    });
  })(req, res, next);
};

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({
      status: "Failed",
      code: "404",
      result: {
        message: wrapper.JWTAuth
      }
    })
  }
}

exports.findById = function (req, res) {
  var sch_detail_id = req.params.id;
  console.log("---------------------- > " + sch_detail_id)
  User.findById({ _id: sch_detail_id }, function (err, userdata) {
    if (err) {
      res.send(err);
    }
    res.json(userdata);
  });
};

module.exports.update_user = function (req, res) {

  var sch_detail = req.body;

  service.update_user(sch_detail, function (detail) {


    if (detail.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: detail.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: detail
      });

  })
}

module.exports.getuserbydanceid = function (req, res) {
  var dance_id = req.body.category_id;
  console.log("controller$$$",dance_id);
  var sub_category_id = req.body.sub_category_id;
  console.log("controller$$$",sub_category_id);
  service.getuserbydanceid(dance_id, sub_category_id, function (user_data) {

    if (user_data.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: user_data.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: user_data
      });
  })
}



module.exports.delete_user = function (req, res) {

  var sch_detail_id = req.params.id;

  service.delete_user(sch_detail_id, function (detail_id) {


    if (detail_id.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: detail_id.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: detail_id
      });
  });
}

module.exports.getall_user = function (req, res) {

  service.getall_user(function (detail) {


    if (detail.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: detail.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: detail
      });

  })
}

module.exports.changeUserPrivilage = function (req, res) {
  var UserData = req.body;
  service.changeUserPrivilage(UserData, function (User) {

    if (User.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: User.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: User
      });

  })
}

module.exports.findUserByScheduleId = function (req, res) {
  var schedule = req.body;
  service.findUserByScheduleId(schedule, function (User) {

    if (User.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: User.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: User
      });

  })
}

