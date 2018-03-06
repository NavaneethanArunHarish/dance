var service = require("../Services/assets_Service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_asset = function (req, res) {
    var asset_detail = req.body;
    service.create_asset(asset_detail, function (detail) {
        console.log('-----------------------------------', detail)
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
            })
    })
}

module.exports.update_asset = function (req, res) {
    var asset_detail = req.body;
    service.update_asset(asset_detail, function (detail) {
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

module.exports.update_asset_type = function (req, res) {
    var asset_type = req.body;
    service.update_asset(asset_type, function (type) {
        if (type.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: type.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: type
            });
    })
}


module.exports.delete_asset = function (req, res) {
    var asset_detail_id = req.params.id;
    service.delete_asset(asset_detail_id, function (detail_id) {
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

module.exports.getall_asset = function (req, res) {
    service.getall_asset(function (detail) {
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


module.exports.findbybusinessid_asset = function (req, res) {
    var business_id = req.params.business_id;
    service.findbybusinessid_asset(business_id, function (asset) {
        if (asset.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: asset.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: asset
            });
    })
}

module.exports.findByAssetType = function (req, res) {
    var AssertType = req.params.id;
    service.findByAssetType(AssertType, function (AssetTypeDetail) {
        if (AssetTypeDetail.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: AssetTypeDetail.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: AssetTypeDetail
            });
    })
}
