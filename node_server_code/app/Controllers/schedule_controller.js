var service = require("../Services/schedule_Service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_schedule = function (req, res) {
    var schedule_detail = req.body;
    service.create_schedule(schedule_detail, function (detail) {

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

module.exports.update_schedule = function (req, res) {
    var schedule_detail = req.body;
    service.update_schedule(schedule_detail, function (detail) {

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

module.exports.delete_schedule = function (req, res) {
    var schedule_detail_id = req.params.id;
    service.delete_schedule(schedule_detail_id, function (detail_id) {

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
    })
}

module.exports.getall_schedule = function (req, res) {
    service.getall_schedule(function (detail) {

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


module.exports.findbyeventanddate = function (req, res) {
    var eventid = req.params.eventid;
    service.findbyeventanddate(eventid, function (eventdate) {

        if (eventdate.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: eventdate.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: eventdate
            });
    })
}

module.exports.findbyeventIdAndstartTimeAndEndTime = function (req, res) {
    var eventid = req.body.eventid;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    console.log(';;;;;;;;;;;;;;;;;;;;', endTime)
    console.log(';;;;;;;;;;;;;;;;;;;;', eventid)
    service.findbyeventIdAndstartTimeAndEndTime(eventid, startTime, endTime, function (eventTime) {

        if (eventTime.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: eventTime.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: eventTime
            });
    })
}

module.exports.findTrainerAvailabilityByDate = function (req, res) {
    var participants = req.body.participants;
    var date = req.body.date;
    console.log(';;;;;;;;;;;;;;;;;;;;', participants)
    service.findTrainerAvailabilityByDate(participants, date, function (Trainerdate) {

        if (Trainerdate.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Trainerdate.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Trainerdate
            });
    })
}

module.exports.findSchedulesByEventId = function (req, res) {
    var eventid = req.body.eventid;
    service.findSchedulesByEventId(eventid, function (Schedules) {

        if (Schedules.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Schedules.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Schedules
            });
    })
}
module.exports.findSchedulesByCategoryId = function (req, res) {
    var categotryId = req.body.category_id;
    var subCategoryId =  req.body.subCategory_id;
    var eventid = req.body.eventid;
    service.findSchedulesByCategoryId(categotryId,subCategoryId, eventid,function (Schedules) {

        if (Schedules.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Schedules.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Schedules
            });
    })
}


module.exports.findSchedulesByEventIdForAvailability = function (req, res) {
    var eventid = req.body.eventid;
    service.findSchedulesByEventIdForAvailability(eventid, function (Schedules) {

        if (Schedules.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Schedules.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Schedules
            });
    })
}


module.exports.findSchedulesByEventIdAndDate = function (req, res) {
    var eventid = req.body.eventid;
    var date = req.body.date;
    service.findSchedulesByEventIdAndDate(eventid, date, function (Schedules) {

        if (Schedules.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Schedules.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Schedules
            });
    })
}

module.exports.findHostsAssingedInScheduleWithinEventAndDate = function (req, res) {
    var eventid = req.body.eventid;
    var date = req.body.date;
    var hosts = req.body.hosts;
    service.findHostsAssingedInScheduleWithinEventAndDate(eventid, date, hosts, function (Hosts) {

        if (Hosts.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Hosts.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Hosts
            });
    })
}


module.exports.scheduleAvailabilityChart = function (req, res) {
    var eventid = req.body.eventid;
    var date = req.body.date;
    var hosts = req.body.hosts;
    console.log("Event id", eventid)
    service.scheduleAvailabilityChart(eventid, date, hosts, function (Hosts) {

        if (Hosts.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Hosts.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Hosts
            });
    })
}

module.exports.findScheduleById = function (req, res) {
    var scheduleid = req.params.scheduleid;
    service.findScheduleById(scheduleid, function (Schedules) {

        if (Schedules.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Schedules.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Schedules
            });
    })
}


module.exports.scheduleAvailabilityChart = function (req, res) {
    var eventid = req.body.eventid;
    var date = req.body.date;
    var hosts = req.body.hosts;
    console.log("Event id", eventid)
    service.scheduleAvailabilityChart(eventid, date, hosts, function (Hosts) {

        if (Hosts.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Hosts.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Hosts
            });
    })
}

module.exports.findSchedulesByDate = function (req, res) {
    var date = req.body;
    console.log("date---", date)
    service.findSchedulesByDate(date, function (Date) {

        if (Date.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: Date.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: Date
            });
    })
}

module.exports.findScheduleLocation = function (req, res) {
    var location = req.body;
    service.findScheduleLocation(location, function (Location) {
        
        if(Location.errors){
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result:Location.message
            });
        }else
        res.status(200).send({
            status: wrapper.SuccessStatus,
            code: wrapper.SuccessCode,
            result:Location
        });
    })
}

module.exports.findScheduleLocationAndDate = function (req, res) {
    var locationAndDate = req.body;
    service.findScheduleLocationAndDate(locationAndDate, function (LocationAndDate) {
        
        if(LocationAndDate.errors){
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result:LocationAndDate.message
            });
        }else
        res.status(200).send({
            status: wrapper.SuccessStatus,
            code: wrapper.SuccessCode,
            result:LocationAndDate
        });
    })
}