var service = require("../Services/schedule_details_service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_schedule_detail = function (req, res) {
    var schedule_detail = req.body;
    service.create_schedule_detail(schedule_detail, function (detail) {
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

module.exports.update_schedule_detail = function (req, res) {
    var schedule_detail = req.body;
    service.update_schedule_detail(schedule_detail, function (detail) {
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

module.exports.delete_schedule_detail = function (req, res) {
    var schedule_detail_id = req.params.id;
    service.delete_schedule_detail(schedule_detail_id, function (detail_id) {
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

module.exports.getall_schedule_detail = function (req, res) {
    service.getall_schedule_detail(function (detail) {
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

module.exports.getScheduleDetailByDateRange = function (req, res) {
    var scheduleDate = req.body;
    service.getScheduleDetailByDateRange(scheduleDate,function (detail) {
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

module.exports.getScheduleDetailByScheduleId = function (req, res) {
    var scheduleId = req.body;
    service.getScheduleDetailByScheduleId(scheduleId,function (detailId) {
        if (detailId.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detailId.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detailId
            });
    })
}

module.exports.getScheduleDetailByCategoryId = function (req, res) {
    var categoryId = req.body;
    service.getScheduleDetailByCategoryId(categoryId,function (detailId) {
        if (detailId.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detailId.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detailId
            });
    })
}

module.exports.getScheduleDetailByEventId = function (req, res) {
    var eventId = req.body;
    service.getScheduleDetailByEventId(eventId,function (detailId) {
        if (detailId.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: detailId.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: detailId
            });
    })
}