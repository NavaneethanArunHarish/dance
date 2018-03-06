var batchdetails = require('../Models/Batch_model')
var user = require('../Models/user_model')
var schedule = require('../Models/schedule_model')

module.exports.create_batch = function (batch_detail, callback) {
  var batch = new batchdetails(batch_detail);
  console.log(batch_detail)
  batch.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(batch);
    }
  });
};

module.exports.getall_batch = function (callback) {
  batchdetails.find(function (err, batch_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(batch_detail);
    }
  });
};


module.exports.update_batch = function (batch_detail, callback) {
  batchdetails.findOneAndUpdate({ _id: batch_detail._id },
    {
      $set: batch_detail
    }, { upsert: true, new: true }, function (err, batch_detail) {
      if (err) {
        callback(err);
      }
      else {
        callback(batch_detail);
      }
    });
};

module.exports.delete_batch = function (batch_detail_id, callback) {
  batchdetails.findByIdAndRemove(batch_detail_id, function (err, batch_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", batch_detail_id: batch_detail_id });
    }
  });
};


module.exports.findBatchById = function (batchid, callback) {
  console.log("---batch dao find by id------------------- > " + batchid)
  batchdetails.findById({ _id: batchid }, function (err, batchdata) {

    if (err) {
      callback(err);
    }
    else {
      callback(batchdata);
    }
  });
};


module.exports.getBatchDetailByDateRange = function (batchDate, callback) {
  var startDate = batchDate.startDate;
  var endDate = batchDate.endDate;
  scheduledetail.find(
    { "created_date": { "$gte": startDate, "$lte": endDate } })
    .populate([
      { path: 'schedule_id', model: schdedule },
      { path: 'participants', model: user }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}