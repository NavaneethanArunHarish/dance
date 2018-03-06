var scheduledetail = require('../Models/Schedule_details_model');
var eventdata = require('../Models/event_model')
var userdata = require('../Models/user_model')
var assset = require('../Models/assets_model')
var business = require('../Models/business_model')
var category = require('../Models/Category_model')
var scheduleModel = require('../Models/schedule_model')
var subCategory = require("../Models/subCategory_model")

module.exports.create_schedule_detail = function (schedule_detail, callback) {
  var schedule = new scheduledetail(schedule_detail);
  schedule.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule);
    }
  });
};

module.exports.update_schedule_detail = function (callback) {
  scheduledetail.find(function (err, schedule_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule_detail);
    }
  });
};

module.exports.delete_schedule_detail = function (schedule_detail_id, callback) {
  scheduledetail.findByIdAndRemove(schedule_detail_id, function (err, schedule_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", schedule_detail_id: schedule_detail_id });
    }
  });
};

module.exports.getall_schedule_detail = function (callback) {
  scheduledetail.find().populate([
    { path: 'event_id', model: eventdata },
    { path: 'hosts', model: userdata },
    { path: 'category_id', model: category },
    {path :"subCategory_id",model:subCategory},
    { path: 'schedule_id', model: scheduleModel }
  ]).exec (function (err, schedule_detail) {
    if (err) {
      callback(err)

    }
    else {
      callback(schedule_detail);
    }
  });
}



module.exports.getScheduleDetailByDateRange = function (scheduleDate, callback) {
  var startDate = scheduleDate.startDate;
  var endDate = scheduleDate.endDate;
  scheduledetail.find(
    { "created_date": { "$gte": startDate, "$lte": endDate } })
    .populate([
      { path: 'event_id', model: eventdata },
      { path: 'hosts', model: userdata },
      { path: 'category_id', model: category },
      { path: 'schedule_id', model: scheduleModel }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.getScheduleDetailByScheduleId = function (scheduleId, callback) {
  var scheduleid = scheduleId.schedule_id;
  scheduledetail.find({ 'schedule_id': scheduleid })
    .populate([
      { path: 'event_id', model: eventdata },
      { path: 'hosts', model: userdata },
      { path: 'category_id', model: category },
      { path: 'schedule_id', model: scheduleModel }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.getScheduleDetailByCategoryId = function (categoryId, callback) {
  var categoryid = categoryId.category_id;
  scheduledetail.find({ 'category_id': categoryid })
    .populate([
      { path: 'event_id', model: eventdata },
      { path: 'hosts', model: userdata },
      { path: 'category_id', model: category },
      { path: 'schedule_id', model: scheduleModel }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.getScheduleDetailByEventId = function (eventId, callback) {
  var eventid = eventId.event_id;
  scheduledetail.find({ 'event_id': eventid })
    .populate([
      { path: 'event_id', model: eventdata },
      { path: 'hosts', model: userdata },
      { path: 'category_id', model: category },
      { path: 'schedule_id', model: scheduleModel }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}