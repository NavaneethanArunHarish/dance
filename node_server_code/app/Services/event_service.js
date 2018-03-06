var dao = require("../DAO/event_DAO")
var userdata = require('../Models/user_model')
var businessmodel = require('../Models/business_model')
var assetmodel = require('../Models/assets_model')
var eventmodel = require('../Models/event_model')
var categoryModel = require('../Models/Category_model')
var async = require('async');

module.exports.create_event = function(eventdetail,callback) {
      dao.create_event(eventdetail,function (event){
      callback(event);
    });
}

module.exports.getall_event = function(callback) {
  dao.getall_event(function (event_detail){
      eventmodel.find(event_detail)
      .populate([
        {path: 'host', model: userdata}, 
        {path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
        {path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      },
      {
        path:'dance_id',model: categoryModel
      }
      ])
      .exec(function (err, output) {
          callback(output);
      })
  });
}

module.exports.delete_event = function(event_detail_id,callback) {
  dao.delete_event(event_detail_id,function (event_id){
    callback(event_id);
  });
}

module.exports.update_event = function(event_data,callback) {
  dao.update_event(event_data,function (event_detail){
    callback(event_detail);
  });
}

module.exports.geteventbydanceid = function(id,callback){
  dao.geteventbydanceid(id,function(event_data){
    callback(event_data);
  })
}

module.exports.find_by_catergory_id = function(eventdetail,callback) {
  dao.find_by_catergory_id(eventdetail,function (event){
  callback(event);
});
}

module.exports.findbyhostid_event =function(hostId,callback){
  dao.findbyhostid_event(hostId,function(eventdata){
    callback(eventdata);
  });
}

module.exports.findbyassetid_event =function(assetid,callback){
  dao.findbyassetid_event(assetid,function(eventdata){
    callback(eventdata);
  });
}

module.exports.findbybusinessid_event =function(businessid,callback){
  dao.findbybusinessid_event(businessid,function(eventdata){
    callback(eventdata);
  });
}

module.exports.findById = function(userid,callback) {
  dao.findById(userid,function (sch_detail_id){
    eventmodel.findById(sch_detail_id)
    .populate([
      {path: 'host', model: userdata}, 
      {path: 'business_id', model: businessmodel,
      populate: {
        path: 'owner',
        model: userdata
      }
    },
      {path: 'assetid', model: assetmodel,
      populate: {
        path: 'businessid',
        model: businessmodel,
        populate: {path: 'owner', model: userdata}
      }
    }
    ])
    .exec(function (err, output) {
        callback(output);
    })
  });
}

module.exports.findByIdEventType = function(eventtype,callback) {
  dao.findByIdEventType(eventtype,function (eventtypedetails){
    callback(eventtypedetails);
  });
}


module.exports.findEventsByDate = function(Event,callback) {
  dao.findEventsByDate(Event,function (event){
    callback(event);
  });
}
module.exports.findeventBytraineridanddancerid = function(Event,callback) {
  dao.findeventBytraineridanddancerid(Event,function(event_data){
    callback(event_data)
  })
}
module.exports.findeventByCategoryId = function(categoryid,subCategory_id,callback) {
  dao.findeventByCategoryId(categoryid,subCategory_id,function(Category){
    callback(Category)
  })
}