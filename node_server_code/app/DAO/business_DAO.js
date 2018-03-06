var trainerdetails = require('../Models/business_model');
var userdatamodel = require('../Models/user_model');
var async = require('async');

module.exports.create_business = function (business_detail, callback) {
  var businessdata = new trainerdetails(business_detail);

  businessdata.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(businessdata);
    }
  });
};

module.exports.getall_business = function (callback) {
  trainerdetails.find(function (err, sch_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(sch_detail);
    }
  });
};


module.exports.update_business = function (sch_detail, callback) {
  trainerdetails.findOneAndUpdate({ _id: sch_detail._id },
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

module.exports.findbyownerid_business = function (ownerId, callback) {
  var ownerDatas = [];
  trainerdetails.findOne({ owner: ownerId }, 'owner name phone city', function (err, business_detail) {
    if (err) {
      callback(err);
    }
    else {
      ownerDatas.push(business_detail)
      async.forEach(ownerDatas, function (owner) {
        userdatamodel.populate(
          owner,
          { "path": "owner" },
          function (err, output) {
            if (err) throw err;
            callback(output)
          }
        );
      }, function (err) {
        console.log(err);
      });
    }
  });
}

module.exports.delete_business = function (sch_detail_id, callback) {
  trainerdetails.findByIdAndRemove(sch_detail_id, function (err, sch_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", business_detail_id: sch_detail_id });
    }
  });
};

exports.findById = function (userid, callback) {
  var businessdatas = [];
  trainerdetails.findById({ _id: userid }, function (err, userdata) {
    if (err) {
      callback(err);
    }
    else {
      businessdatas.push(userdata)
      async.forEach(businessdatas, function (owner) {
        userdatamodel.populate(
          owner,
          { "path": "owner" },
          function (err, output) {
            if (err) throw err;
            callback(output)
          }
        );
      }, function (err) {
        console.log(err);
      });
    }
  });
};