var eventdetails = require('../Models/event_model');
var userdata = require('../Models/user_model')
var businessmodel = require('../Models/business_model')
var assetmodel = require('../Models/assets_model')
var schedulemodel = require('../Models/schedule_model')

var assetDao = require('./assets_DAO');
var userdDao = require('./user_Dao')

module.exports.create_event = function (event_detail, callback) {
  var eventdata = new eventdetails(event_detail);

  eventdata.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(eventdata);
    }
  });
}

module.exports.getall_event = function (callback) {
  eventdetails.find(function (err, event_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(event_detail);
    }
  });
};

module.exports.delete_event = function (eventdata_id, callback) {
  eventdetails.findByIdAndRemove(eventdata_id, function (err, event_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", event_id: event_detail_id });
    }
  });
};

module.exports.update_event = function (event_detail, callback) {
  eventdetails.findOneAndUpdate({ _id: event_detail._id },
    {
      $set: event_detail
    }, { upsert: true, new: true }, function (err, event_detail) {
      if (err) {
        callback(err);
      }
      else {
        callback(event_detail);
      }
    });
};

module.exports.find_by_catergory_id = function (event_detail, callback) {

  eventdetails.findById({ category_id: event_detail.category_id }, function (err, eventdata) {
    if (err) {
      callback(err);
    }
    else {
      callback(eventdata);
    }
  });

}



module.exports.findbyhostid_event = function (hostId, callback) {
  console.log("--host id ---- > ", hostId);
  eventdetails.find({ host: hostId })
    .populate([
      { path: 'host', model: userdata },
      {
        path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
      {
        path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}


module.exports.findbyassetid_event = function (assetId, callback) {
  console.log("--asset Id ---- > ", assetId);

  eventdetails.find({ assetid: assetId })
    .populate([
      { path: 'host', model: userdata },
      {
        path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
      {
        path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}


module.exports.findbybusinessid_event = function (businessId, callback) {

  eventdetails.find({ business_id: businessId })
    .populate([
      { path: 'host', model: userdata },
      {
        path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
      {
        path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

exports.findById = function (eventid, callback) {
  eventdetails.findById({ _id: eventid }, function (err, eventdata) {
    if (err) {
      callback(err);
    }
    else {
      console.log("first -> ", eventdata)
      
      callback(eventdata);
    }
  });
};

module.exports.geteventbydanceid = function (id, callback) {
  console.log("geteventbydanceid-----", id);
  eventdetails.find({ dance_id: id }, function (err, student_data) {
    if (err) {
      callback(err);
    }
    else {
      callback(student_data);
    }
  })
}

exports.findByIdEventType = function (eventTypeDetail, callback) {
  console.log("---------------------- > " + eventTypeDetail)

  eventdetails.find({ eventtype: eventTypeDetail })
    .populate([
      { path: 'host', model: userdata },
      {
        path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
      {
        path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      }
    ])
    .exec(function (err, output) {
      callback(output);
    })
};


exports.findEventsByDate = function (Event, callback) {

  console.log("event ", Event.body)
  var startDate = Event.startDate;
  var endDate = Event.endDate;
  console.log("startDate", startDate)
  console.log("endDate", endDate)
  eventdetails.find({ "event_date": { "$gte": startDate, "$lt": endDate } })
    .populate([
      { path: 'host', model: userdata },
      {
        path: 'business_id', model: businessmodel,
        populate: {
          path: 'owner',
          model: userdata
        }
      },
      {
        path: 'assetid', model: assetmodel,
        populate: {
          path: 'businessid',
          model: businessmodel,
          populate: { path: 'owner', model: userdata }
        }
      }
    ])
    .exec(function (err, output) {
      console.log("output", output)
      callback(output);
    })

};

module.exports.findeventBytraineridanddancerid = function (Event, callback) {
  eventdetails.find({
    host: Event.host,
    dance_id: Event.dance_id,

  }).exec(function (err, output) {
    console.log("--------------", output)
    callback(output)

  })
};



module.exports.findeventByCategoryId = function (category_id,subCategory_id,callback) {
  
  eventdetails.find({
    category_id: category_id,
    subCategory_id:subCategory_id
  

  }).exec(function (err, output) {
    console.log("--------------", output)
    callback(output)

  })
};
