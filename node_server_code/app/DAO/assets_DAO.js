var assetdetails = require('../Models/assets_model');
var businessmodel = require('../Models/business_model');
var usermodel = require('../Models/user_model')
var assetmodel = require('../Models/assets_model')
var async = require('async');

module.exports.create_asset = function (sch_detail, callback) {
  var asset = new assetdetails(sch_detail);
  console.log(sch_detail)
  asset.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(asset);
    }
  });
};

module.exports.getall_asset = function (callback) {
  assetdetails.find(function (err, sch_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(sch_detail);
    }
  });
};


module.exports.update_asset = function (sch_detail, callback) {
  assetdetails.findOneAndUpdate({ _id: sch_detail._id },
    {
      $set: sch_detail
    }, { upsert: true, new: true }, function (err, sch_detail) {
      if (err) {
        callback(err);
      }
      else {
        callback(sch_detail);
      }
    });
};

module.exports.delete_asset = function (sch_detail_id, callback) {
  assetdetails.findByIdAndRemove(sch_detail_id, function (err, sch_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", sch_detail_id: sch_detail_id });
    }
  });
};

module.exports.findbybusinessid_asset = function (business_id, callback) {
  let response = [];
  var i = 0;
  assetdetails.find({ businessid: business_id }, 'assetname assettype assetcategory associatedcost businessid', function (err, asset_detail) {

    if (err) {
      callback(err);
    }
    else {
      assetmodel.find({ businessid: business_id })
        .populate([
          {
            path: 'businessid', model: businessmodel,
            populate: { path: 'owner', model: usermodel }
          },
        ])
        .exec(function (err, output) {
          callback(output);
        })
    }
  });

}

exports.findById = function (assetid, callback) {
  var assetdatas = [];
  assetdetails.findById({ _id: assetid }, function (err, assetdata) {
    assetmodel.find({ _id: assetid })
      .populate([
        {
          path: 'businessid', model: businessmodel,
          populate: { path: 'owner', model: usermodel }
        },
      ])
      .exec(function (err, output) {
        callback(output);
      })
  });
};

exports.findByAssetType = function (assert_type_details, callback) {
  var businessDatas = [];
  assetmodel.find({ assettype: assert_type_details })
    .populate([
      {
        path: 'businessid', model: businessmodel,
        populate: { path: 'owner', model: usermodel }
      },
    ])
    .exec(function (err, output) {
      callback(output);
    })
};

