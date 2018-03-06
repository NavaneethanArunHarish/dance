var auditService = require("../Services/AuditService");
var wrapper = require('../../app/constants/wrapper')

module.exports.create_audit = function (req, res) {
    var create_audit = req.body;
    auditService.create_audit(create_audit, function (data) {

        if (data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: data
            });
    })
}

module.exports.delete_audit = function (req, res) {
    var delete_audit = req.params.id;
    auditService.delete_audit(delete_audit, function (deleted_data) {
        if (deleted_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: deleted_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: deleted_data
            });
    })
}
module.exports.findauditById = function (req, res) {
    var findone_audit = req.params.id;
    auditService.findauditById(findone_audit, function (findOne_data) {
        if (findOne_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findOne_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findOne_data
            });
    })
}

module.exports.getall_audit = function (req, res) {
    auditService.getall_audit(function (findall_data) {
        if (findall_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findall_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findall_data
            });
    })
}
