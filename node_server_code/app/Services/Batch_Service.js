var dao = require("../DAO/Batch_DAO")
var batchdetail = require("../Models/Batch_model")
var usermodel = require("../Models/user_model")
var schedulemodel = require("../Models/schedule_model")
var Businessmodel = require("../Models/business_model")
var Assetmodel = require("../Models/assets_model")
var eventmodel = require("../Models/event_model")

module.exports.create_batch = function(detail,callback) {
    dao.create_batch(detail,function (batch_detail){
      callback(batch_detail);
    });
  }
  
  module.exports.update_batch = function(detail,callback) {
    dao.update_batch(detail,function (batch_detail){
      callback(batch_detail);
    });
  }
  
  module.exports.delete_batch = function(batch_detail_id,callback) {
    dao.delete_batch(batch_detail_id,function (batch_detail_id){
      callback(batch_detail_id);
    });
  }

  module.exports.getall_batch = function(callback) {
    dao.getall_batch(function (batch_detail){
        batchdetail.find(batch_detail)
        .populate([
          {path: 'Instructor', model: usermodel}, 
          {path: 'scheduleID', model: schedulemodel,
          populate:
          {path: 'eventid', model: eventmodel,
          populate: [{ path: 'business_id', model: Businessmodel,
            populate: { path: 'owner', model: usermodel }
          },
          { path: 'assetid', model: Assetmodel,
            populate: { path: 'businessid', model: Businessmodel,
              populate: { path: 'owner', model: usermodel }
          }
        },
          { path: 'host', model: usermodel }]
          },
         
        }
])
        .exec(function (err, output) {
            callback(output);
            console.log(output)
        })
    //    callback(batch_detail_id);
    });
  }
    
  
  module.exports.findBatchById = function(batchid,callback) {
    dao.findBatchById(batchid,function (batch_detail_id){
    batchdetail.find(batch_detail_id)
        .populate([
          {path: 'Instructor', model: usermodel}, 
          {path: 'scheduleID', model: schedulemodel,
          populate:
          {path: 'eventid', model: eventmodel,
          populate: [{ path: 'business_id', model: Businessmodel,
            populate: { path: 'owner', model: usermodel }
          },
          { path: 'assetid', model: Assetmodel,
            populate: { path: 'businessid', model: Businessmodel,
              populate: { path: 'owner', model: usermodel }
          }
        },
          { path: 'host', model: usermodel }]
          },
         
        }
])
        .exec(function (err, output) {
            callback(output);
            console.log(output)
        })
    //    callback(batch_detail_id);
    });
  }

  module.exports.getBatchDetailByDateRange = function (batchDate,callback) {
    dao.getBatchDetailByDateRange(batchDate,function (batch) {
      callback(batch);
    });
  }