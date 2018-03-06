var service = require("../Services/Batch_Service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_batch = function (req, res) {
    var batch_detail = req.body;
    service.create_batch(batch_detail, function (detail) {
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

module.exports.update_batch = function (req, res) {
    var batch_detail = req.body;
    service.update_batch(batch_detail, function (detail) {
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

module.exports.delete_batch = function (req, res) {
    var batch_detail_id = req.params.id;
    service.delete_batch(batch_detail_id, function (detail_id) {
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

module.exports.getall_batch = function (req, res) {
    service.getall_batch(function (detail) {
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

module.exports.findBatchById = function (req, res) {
    var batch_detail_id = req.params.id;
    service.findBatchById(batch_detail_id, function (detail_id) {
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

module.exports.getBatchDetailByDateRange = function (req, res) {
    var batchDate = req.body;
    service.getBatchDetailByDateRange(scheduleDate, function (Batch) {
        res.json(Batch);
    })
}