var student_dao = require('../DAO/student_DAO');
var async = require('async');

module.exports.create_student = function (create_student, callback) {
    console.log("stduent services------", create_student);
    student_dao.create_student(create_student, function (studentdata) {

        callback(studentdata);
    })
}

module.exports.findByScheduleIdAndBookedStatus = function (create_student, callback) {
    console.log("stduent services------", create_student);
    student_dao.findByScheduleIdAndBookedStatus(create_student, function (studentdata) {

        callback(studentdata);
    })
}

module.exports.updateScheduleId = function (create_student, callback) {
    console.log("stduent services------", create_student);
    var schedule_id = create_student.schedule_id;

    async.forEachOf(create_student.students, function (value,key, callback) {
        student_dao.updateScheduleId(value,schedule_id, function (studentdata) {

            callback(studentdata);
        })
    }, function (err) {
        if (err) console.error(err.message);
        var object = {
            status : "updated"
        }
        callback(object);
    });

}

module.exports.findbydanceid = function (create_student, callback) {
    console.log("stduent services------", create_student);
    student_dao.findbydanceid(create_student, function (studentdata) {

        callback(studentdata);
    })
}

module.exports.update_student = function (update_student, callback) {
    console.log("updatij services", update_student);
    student_dao.update_student(update_student, function (update_student) {
        callback(update_student);
    })
}
module.exports.updatestudentwithpaymentid = function (update_student, callback) {
    console.log("updatinf student with paymen in servuces", update_student);
    student_dao.updatestudentwithpaymentid(update_student, function (updatedata) {
        callback(updatedata);
    })
}
module.exports.delete_student = function (delete_student, callback) {
    console.log("deleting services", delete_student);
    student_dao.delete_student(delete_student, function (delete_student) {
        callback(delete_student);
    })
}
module.exports.findbyid_student = function (student_id, callback) {
    console.log("findbyid serivescs", student_id);
    student_dao.findbyid_student(student_id, function (student_data) {
        callback(student_data);
    })
}

module.exports.changeStudentStatus = function (student_id, callback) {
    console.log("findbyid serivescs", student_id);
    student_dao.changeStudentStatus(student_id, function (student_data) {
        var obj = {
            status : "updated"
        }
        callback(obj);
    })
}

module.exports.getall_student = function (callback) {
    console.log("findall serviefsc");
    student_dao.getall_student(function (student_details) {
        callback(student_details);
    })
}
module.exports.findbypaymentid = function (findone, callback) {
    console.log("findallwithpayment in findone services", findone);
    student_dao.findbypaymentid(findone, function (student_details) {
        callback(student_details);
    })
}
module.exports.getstudentbydanceid = function (id, callback) {
    console.log("getstudentbyid in services", id);
    student_dao.getstudentbydanceid(id, function (student_data) {
        callback(student_data);
    })
}
// module.exports.findallwithpayment = function(callback){
//     console.log("findallwithpayment in findall services");
//     student_dao.findallwithpayment(function(student_details){
//         callback(student_details);
//     })
// }
module.exports.updatestudentwithbatchid = function (update_student, callback) {
    console.log("updatinf student with batch in servuces", update_student);
    student_dao.updatestudentwithbatchid(update_student, function (updatedata) {
        callback(updatedata);
    })
}

module.exports.getallstudentbybatchid = function (id, callback) {
    console.log("getallstudentbybatchid in services", id);
    student_dao.getallstudentbybatchid(id, function (student_data) {
        callback(student_data);
    })
}
