var attendance_Dao = require("../DAO/attendance_DAO")


module.exports.create_Attendance = function (create_Attendance,callback){
    attendance_Dao.create_Attendance(create_Attendance, function(created){
        callback(created);
    })
}
module.exports.delete_Attendance = function(delete_Attendance,callback){
    attendance_Dao.delete_Attendance(delete_Attendance,function(deleted){
        callback(deleted);
    })
}

module.exports.update_Attendance = function(update_Attendance,callback){
    attendance_Dao.update_Attendance(update_Attendance,function(updated_data){
        callback(updated_data);
    })
}
module.exports.getall_Attendance = function(callback){
    attendance_Dao.getall_Attendance(function(getall){
        callback(getall);
    })
}

module.exports.findAttendanceBydate = function (attendance,callback){
    attendance_Dao.findAttendanceByDate(attendance,function(databydate){
        console.log("databydate",databydate)
        callback(databydate);
    })
}

module.exports.update_Attendance_By_ss_Id = function (updateAttendance ,callback){
    attendance_Dao.update_attendanceBy_ss_id(updateAttendance, function(data){
        console.log('the service update Attendance ship is coming',data);
        callback(data)
    })
}