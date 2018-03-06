var attendance_Service = require('../Services/attendance_service')
var wrapper = require('../../app/constants/wrapper')



module.exports.create_attendance = function (req , res){
    var create_attendance = req.body;
    attendance_Service.create_Attendance(create_attendance, function(data){
        console.log(data)
        if(data.errors){
            res.status(400).send({
              status:wrapper.FailureStatus,
              code:wrapper.FailureCode,
              result:data.message

            });
        
        } else{
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result:data
            });
        }
    })

}
module.exports.delete_Attendance = function (req, res) {
    var delete_Attendance = req.params.id;
    console.log("delete attendance id ===",delete_Attendance)
    attendance_Service.delete_Attendance(delete_Attendance, function (deleted_data) {
        if (deleted_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: deleted_data.message
            });
        } else{
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: deleted_data
            });
        }
    })
}
module.exports.update_attendance = function (req, res) {
    var update_attendance = req.body;
    attendance_Service.update_Attendance(update_attendance, function (updated_data) {

        if (updated_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: updated_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: updated_data
            });
    })
}

module.exports.getall_Attendance = function (req, res) {
    attendance_Service.getall_Attendance(function (findall_data) {
        if (findall_data.errors) {
            res.status(400).send({
                status: wrapper.FailureStatus,
                code: wrapper.FailureCode,
                result: findall_data.message
            });
        } else
            res.status(200).send({
                status: wrapper.SuccessStatus,
                code: wrapper.SuccessCode,
                result: findall_data
            });
    })
}

module.exports.findAttendanceByDate = function (req ,res){
    var date = req.body.date;
    console.log('the date====',date)
   
    attendance_Service.findAttendanceBydate(date,function(Dates){
     console.log('date +++++++',Dates)
       if(Dates.errors){
        res.status(400).send({
            status: wrapper.FailureStatus,
            code: wrapper.FailureCode,
            result: Dates.message
        });
    } else
        res.status(200).send({
            status: wrapper.SuccessStatus,
            code: wrapper.SuccessCode,
            result: Dates
        });

    })
}

module.exports.update_attendanceById = function(req,res){
   var updateAttendanceStatus = req.body
   console.log("the request field update Attendance status pirates ship >>>>>",updateAttendanceStatus)
   attendance_Service.update_Attendance_By_ss_Id (updateAttendanceStatus, function(updateStatus){
       if(updateStatus.errors){
        res.status(400).send({
            status: wrapper.FailureStatus,
            code: wrapper.FailureCode,
            result: updateStatus.message
        });
    } else
        res.status(200).send({
            status: wrapper.SuccessStatus,
            code: wrapper.SuccessCode,
            result: updateStatus
        });

       
   })
}