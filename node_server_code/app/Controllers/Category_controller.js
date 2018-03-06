var categoryService = require("../Services/Category_Service");
var wrapper = require('../../app/constants/wrapper')

module.exports.create_category = function (req, res) {
    var create_category = req.body;
    categoryService.create_category(create_category, function (data) {

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
module.exports.update_category = function (req, res) {
    var update_category = req.body;
    categoryService.update_category(update_category, function (updated_data) {

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
module.exports.delete_category = function (req, res) {
    var delete_category = req.params.id;
    categoryService.delete_category(delete_category, function (deleted_data) {
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
module.exports.findbyid_category = function (req, res) {
    var findone_category = req.params.id;
    categoryService.findbyid_category(findone_category, function (findOne_data) {
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

module.exports.getall_category = function (req, res) {
    categoryService.getall_category(function (findall_data) {
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



module.exports.findCategoryByBusinessId = function (req, res) {
    var create_category = req.body;
    categoryService.findCategoryByBusinessId(create_category, function (data) {

        if (data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: data.message
            });
        } else {
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: data
            });
        }

    })
}