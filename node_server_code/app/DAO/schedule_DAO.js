var scheduledetail = require('../Models/schedule_model');
var eventdata = require('../Models/event_model')
var userdata = require('../Models/user_model')
var assset = require('../Models/assets_model')
var business = require('../Models/business_model')


module.exports.create_schedule = function (schedule_detail, callback) {
  var schedule = new scheduledetail(schedule_detail);
  schedule.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule);
    }
  });
};

module.exports.getall_schedule = function (callback) {
  scheduledetail.find(function (err, schedule_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule_detail);
    }
  });
};


module.exports.update_schedule = function (schedule_detail, callback) {
  scheduledetail.findOneAndUpdate({ _id: schedule_detail._id },
    {
      $set: schedule_detail
    }, { upsert: true, new: true }, function (err, schedule_detail) {
      if (err) {
        callback(err);
      }
      else {
        callback(schedule_detail);
      }
    });
};

module.exports.delete_schedule = function (schedule_detail_id, callback) {
  scheduledetail.findByIdAndRemove(schedule_detail_id, function (err, schedule_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", schedule_detail_id: schedule_detail_id });
    }
  });
};


module.exports.findbyeventanddate = function (eventid, callback) {
  console.log("--Event ID ---- > ", eventid);
  scheduledetail.find({ eventid: eventid })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}
/* reservationdetails.find({ eventid: eventid },'location starttime endtime eventid participents',function (err, reservation_detail) {
    if (err) {
       callback(err);
     }
     console.log("---reservation by participent_id ID--- > ",reservation_detail);
     callback(reservation_detail);
   }); */

module.exports.findbyeventIdAndstartTimeAndEndTime = function (eventid, startTime, endTime, callback) {
  console.log("--start ", startTime);
  console.log("--end ", endTime);
  scheduledetail.find({
    eventid: eventid,
    starttime: startTime,
    endtime: endTime
  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findTrainerAvailabilityByDate = function (participants, date, callback) {
  scheduledetail.find({
    participants: participants,
    date: date
  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findSchedulesByEventId = function (eventid, callback) {
  scheduledetail.find({
    eventid: eventid
  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}
module.exports.findSchedulesByCategoryId = function (category_id,subCategory_id,eventid,callback) {
  scheduledetail.find({
    eventid: eventid,
    category_id: category_id,
    subCategory_id:subCategory_id

  })
    .populate([
      { path: 'categoryId', model: eventdata },
      { path: 'subCategoryId', model: eventdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findSchedulesByEventIdForAvailability = function (eventid, callback) {
  scheduledetail.find({
    eventid: eventid,
    isFilled: false,
  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}


module.exports.findSchedulesByEventIdAndDate = function (eventid, date, callback) {
  scheduledetail.find({
    eventid: eventid,
    date: date
  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findHostsAssingedInScheduleWithinEventAndDate = function (eventid, date, hosts, callback) {
  scheduledetail.find({
    eventid: eventid,
    date: date,
    hosts: hosts

  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findTrainerAvaiablityInFullEvent = function (eventid, date, hosts, callback) {
  scheduledetail.find({
    eventid: eventid,
    date: date,
    hosts: hosts

  })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}


module.exports.findScheduleById = function (scheduleid, callback) {
  scheduledetail.findById({ _id: scheduleid })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      console.log("output", output)
      callback(output);
    })


}

module.exports.scheduleAvailabilityChart = function (eventid, date, hosts, callback) {

  scheduledetail.find({ eventid: eventid })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {

      var rate_percentage = 100;

      var total_revenue = 0;
      var target_revenue = 0;
      var rate_of_one_schedule = 0;

      output.forEach(function (item) {
        var a = parseInt(item.eventid.rate) * (rate_percentage / 100)
        total_revenue = total_revenue + a;
        target_revenue = parseInt(item.eventid.targetRevenue);
        rate_of_one_schedule = parseInt(item.eventid.rate);
      })

      var slots = (total_revenue / target_revenue) * 100;


      var chart_object = {
        total_revenue: total_revenue,
        target_revenue: target_revenue,
        rate_of_schedule: rate_of_one_schedule,
        chart: []
      }



      var chart = []
      var availability = {
        label: "Revenue Achieved",
        value: slots,
        color: "#5cb85c"
      }

      chart.push(availability)

      var not_availability = {
        label: "Revenue To Be Achieved",
        value: (100 - slots),
        color: "#00aced"
      }

      chart.push(not_availability)

      chart_object.chart = chart;

      callback(chart_object);
    })
}

module.exports.findSchedulesByDate = function (date, callback) {
  var startDate = date.startDate;
  var endDate = date.endDate;
  console.log('========================================', startDate)
  console.log('========================================', endDate)
  scheduledetail.find(
    { "schedule_date": { "$gte": startDate, "$lte": endDate } })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findScheduleLocation = function (location, callback) {
  var location = location;
  scheduledetail.find({ location: location })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}

module.exports.findScheduleLocationAndDate = function (locationAndDate, callback) {
  var location = locationAndDate.location;
  var date = locationAndDate.date;
  scheduledetail.find({ location: location, date: date, })
    .populate([
      { path: 'eventid', model: eventdata },
      { path: 'participants', model: userdata }
    ])
    .exec(function (err, output) {
      callback(output);
    })
}