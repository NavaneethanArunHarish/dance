var userdetails = require('../Models/user_model');
var categoryDetails = require('../Models/Category_model');


module.exports.getall_user = function (callback) {
   userdetails.find(function (err, sch_detail) {
    if (err) {
        callback(err);
    }
    else {
        callback(sch_detail);
    }
})

};

module.exports.update_user = function (sch_detail, callback) {
  userdetails.findOneAndUpdate({ _id: sch_detail._id },
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

module.exports.delete_user = function (sch_detail_id, callback) {
  userdetails.findByIdAndRemove(sch_detail_id, function (err, sch_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", userid: sch_detail_id });
    }
  });
};

exports.findById = function (userid, callback) {
  console.log("---user dao find by id------------------- > " + userid)
  userdetails.findById({ _id: userid }, function (err, userdata) {
    if (err) {
      callback(err);
    }
    else {
      callback(userdata);
    }
  });
};

module.exports.getuserbydanceid = function (category_id,sub_category_id, callback) {
  console.log("id>>>>>>>>>",category_id,sub_category_id)
  userdetails.find({ category_id:category_id ,sub_category_id:sub_category_id}, function (err, student_data) {
    if (err) {
      callback(err);
    }
    else {
      callback(student_data);
    }
  })
}

module.exports.changeUserPrivilage = function (UserData, callback) {
  console.log("getuserbydanceid-----", UserData);
  userdetails.findOneAndUpdate({ _id: UserData.userid },
    {
      $set: UserData
    }, { upsert: true, new: true }, function (err, newd) {
      if (err) {
        callback(err);
      }
      callback(newd);

    })
}