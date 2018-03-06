var service = require("../Services/business_Service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_business = function (req, res) {
    // 
    var sch_detail = req.body;
    service.create_business(sch_detail, function (detail) {
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

module.exports.update_business = function (req, res) {
    var sch_detail = req.body;
    service.update_business(sch_detail, function (detail) {
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

module.exports.delete_business = function (req, res) {
    var sch_detail_id = req.params.id;
    service.delete_business(sch_detail_id, function (detail_id) {
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

module.exports.getall_business = function (req, res) {
    service.getall_business(function (detail) {
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

module.exports.findbyownerid_business = function (req, res) {
    var ownerId = req.params.ownerid;
    service.findbyownerid_business(ownerId, function (businessdetail) {
        if (businessdetail.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: businessdetail.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: businessdetail
            });
    })
}


module.exports.findById = function (req, res) {
    var sch_detail_id = req.params.id;
    service.findById(sch_detail_id, function (detail_id) {
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
