var dao = require("../DAO/assets_DAO")
var businessmodel = require('../Models/business_model');
var assetmodel = require('../Models/assets_model')
var usermodel = require('../Models/user_model')
var async = require('async');

module.exports.create_asset = function(detail,callback) {
  
  dao.create_asset(detail,function (asset_detail){
    callback(asset_detail);
  });
}

module.exports.update_asset = function(detail,callback) {
  dao.update_asset(detail,function (asset_detail){
    callback(asset_detail);
  });
}

module.exports.delete_asset = function(asset_detail_id,callback) {
  dao.delete_asset(asset_detail_id,function (asset_detail_id){
    callback(asset_detail_id);
  });
}

module.exports.getall_asset = function(callback) {
  let response = [];
  var i=0;
  dao.getall_asset(function (asset_detail){
    assetmodel.find(asset_detail)
    .populate([
      {path: 'businessid', model: businessmodel,
      populate:{path: 'owner', model: usermodel}
    },
    ])
    .exec(function (err, output) {
        callback(output);
    })
  });
}

module.exports.findById = function(userid,callback) {
  dao.findById(userid,function (sch_detail_id){
    callback(sch_detail_id);
  });
}

module.exports.findbybusinessid_asset =function(business_id,callback){
  dao.findbybusinessid_asset(business_id,function(asset_detail){
    callback(asset_detail);
  });
}

module.exports.findByAssetType = function(asserttype,callback) {
  dao.findByAssetType(asserttype,function (assert_type_details){
    callback(assert_type_details);
  });
}

