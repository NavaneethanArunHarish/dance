var dao = require("../DAO/schedule_DAO")

module.exports.create_schedule = function (detail, callback) {
  dao.create_schedule(detail, function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.update_schedule = function (detail, callback) {
  dao.update_schedule(detail, function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.delete_schedule = function (schedule_detail_id, callback) {
  dao.delete_schedule(schedule_detail_id, function (schedule_detail_id) {
    callback(schedule_detail_id);
  });
}

module.exports.getall_schedule = function (callback) {
  dao.getall_schedule(function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.findbyeventanddate = function (event_id, callback) {
  dao.findbyeventanddate(event_id, function (eventdate_detail) {
    callback(eventdate_detail);
  });
}

module.exports.findbyeventIdAndstartTimeAndEndTime = function (eventid, startTime, endTime, callback) {
  dao.findbyeventIdAndstartTimeAndEndTime(eventid, startTime, endTime, function (eventTime) {
    console.log('============================', eventTime)
    callback(eventTime);
  });
}

module.exports.findTrainerAvailabilityByDate = function (participants, date, callback) {
  dao.findTrainerAvailabilityByDate(participants, date, function (Trainers) {
    console.log('============================', Trainers)
    callback(Trainers);
  });
}

module.exports.findSchedulesByEventId = function (eventid, callback) {
  dao.findSchedulesByEventId(eventid, function (Schedules) {
    console.log('============================', Schedules)
    callback(Schedules);
  });
}
module.exports.findSchedulesByCategoryId = function (category_id,subCategory_id,eventid, callback) {
  dao.findSchedulesByCategoryId(category_id, subCategory_id,eventid,function (Schedules) {
    console.log('findSchedulesByCategoryId=============', Schedules)
    callback(Schedules);
  });
}

module.exports.findSchedulesByEventIdForAvailability = function (eventid, callback) {
  dao.findSchedulesByEventIdForAvailability(eventid, function (Schedules) {
    console.log('============================', Schedules)
    callback(Schedules);
  });
}

module.exports.findSchedulesByEventIdAndDate = function (eventid, date, callback) {
  dao.findSchedulesByEventIdAndDate(eventid, date, function (Schedules) {
    console.log('++++++++++++++++++', Schedules)
    callback(Schedules);
  });
}

module.exports.findHostsAssingedInScheduleWithinEventAndDate = function (eventid, date, hosts, callback) {
  dao.findHostsAssingedInScheduleWithinEventAndDate(eventid, date, hosts, function (Hosts) {

    callback(Hosts);
  });
}



module.exports.scheduleAvailabilityChart = function (eventid, date, hosts, callback) {
  dao.scheduleAvailabilityChart(eventid, date, hosts, function (Hosts) {

    callback(Hosts);
  });
}


module.exports.findScheduleById = function (scheduleid, callback) {
  dao.findScheduleById(scheduleid, function (Schedules) {

    callback(Schedules);
  });
}

module.exports.scheduleAvailabilityChart = function (eventid, date, hosts, callback) {
  dao.scheduleAvailabilityChart(eventid, date, hosts, function (Hosts) {

    callback(Hosts);
  });
}

module.exports.findSchedulesByDate = function (date, callback) {
  dao.findSchedulesByDate(date, function (Date) {
    callback(Date);
  });
}

module.exports.findScheduleLocation = function (location, callback) {
  dao.findScheduleLocation(location, function (Location) {
    callback(Location);
  });
}

module.exports.findScheduleLocationAndDate = function (locationAndDate, callback) {
  dao.findScheduleLocationAndDate(locationAndDate, function (LocationAndDate) {
    callback(LocationAndDate);
  });
}