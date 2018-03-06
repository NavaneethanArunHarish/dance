

var attendance_Model = require('../Models/attendance_model')
var schedulemodel = require('../Models/schedule_model')
var userdata = require('../Models/user_model')

module.exports.create_Attendance = function (create_Attendance, callback) {
    var attendance = new attendance_Model(create_Attendance);
    attendance.save(function (err) {
        if (err) {
            callback(err)
        }
        else {
            callback(attendance)
        }

    })

}

module.exports.delete_Attendance = function (delete_Attendance, callback) {
    attendance_Model.findByIdAndRemove(delete_Attendance, function (err) {
        if (err) {
            callback(err);
        }
        else {
            callback({ message: "attendance removed" })
        }
    })
}
module.exports.update_Attendance = function (update_Attendance, callback) {
    attendance_Model.findOneAndUpdate({ _id: update_Attendance._id },
        {
            $set: update_Attendance
        }, { upsert: true, new: true }, function (err, new_updated) {
            if (err) {
                callback(err);
            }
            else {
                callback(new_updated);
            }

        })
}


module.exports.getall_Attendance = function (callback) {
    attendance_Model.find(function (err, all_attendance) {
        if (err) {
            callback(err);
        }
        else {
            console.log('alldata', all_attendance)
            callback(all_attendance);
        }
    })
}

module.exports.findAttendanceByDate = function (attendance, callback) {
   
    var data = attendance;
    attendance_Model.find({ "date":{ "$eq": data}}).populate([
        { path: 'schedule_id', model: schedulemodel },
        { path: 'student_id', model: userdata }
    ]).exec(function (err, data) {
        if (err) {
           
        }
        else {
            callback(data)
            
        }
       
    })
}

module.exports.update_attendanceBy_ss_id = function(updateAttendance,callback){
    attendance_Model.findOneAndUpdate({schedule_id:updateAttendance.schedule_id,student_id:updateAttendance.student_id},
    {
      $set:updateAttendance

    },
    { upsert: true, new: true },
    function(err,updateAttendancedData){
        if(err){
            callback(err)
            console.log("the error")
        }
        else{
            callback(updateAttendancedData)
            console.log("update Attendance dao pirates",updateAttendancedData )
        }
    })
}


