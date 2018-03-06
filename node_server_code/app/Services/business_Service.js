var dao = require("../DAO/business_DAO")
var userdata = require('../Models/user_model');
var async = require('async');

module.exports.create_business = function(detail,callback) {
    dao.create_business(detail,function (sch_detail){
      callback(sch_detail);
    });
}

module.exports.update_business = function(detail,callback) {
    dao.update_business(detail,function (sch_detail){
      callback(sch_detail);
    });
}
module.exports.findbyownerid_business =function(ownerId,callback){
  dao.findbyownerid_business(ownerId,function(businessdetail){
    callback(businessdetail);
  });
}

module.exports.delete_business = function(sch_detail_id,callback) {
    dao.delete_business(sch_detail_id,function (sch_detail_id){
      callback(sch_detail_id);
    });
}

module.exports.getall_business = function(callback) {
  let arrayvar = [];
  var i=0;
  dao.getall_business(function (sch_detail){
    async.forEach(sch_detail, function(owner) {
      userdata.populate(
        owner,
        { "path": "owner" },
        function(err,output) {
          if (err) throw err;
          arrayvar.push(output);
          i=i+1;
          if(i === sch_detail.length){
            callback(arrayvar);
          }
        }
      );
    },function(err) {
      console.log(err);
    });
  });
}

module.exports.findById = function(userid,callback) {
  dao.findById(userid,function (sch_detail_id){
    callback(sch_detail_id);
  });
}
