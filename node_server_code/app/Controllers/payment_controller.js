var payment_service = require("../Services/payment_Service");
var wrapper = require('../../app/constants/wrapper')

module.exports.create_payment = function (req, res) {
    var create_payment = req.body;
    payment_service.create_payment(create_payment, function (created_data) {
        if (created_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: created_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: created_data
            });
    })
}
module.exports.update_payment = function (req, res) {
    var update_payment = req.body;
    payment_service.update_payment(update_payment, function (updated_data) {
        if (updated_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: updated_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: updated_data
            });
    })
}
module.exports.delete_payment = function (req, res) {
    var delete_payment = req.params.id;
    payment_service.delete_payment(delete_payment, function (deleted_data) {
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
module.exports.findbyid_payment = function (req, res) {
    var findone_payment = req.params.id;
    payment_service.findbyid_payment(findone_payment, function (findOne_data) {
        if (findOne_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findOnedata.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findOne_data
            });
    })
}
module.exports.getall_payment = function (req, res) {
    payment_service.getall_payment(function (findall_data) {
        if (findall_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findalldata.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findall_data
            });
    })
}
