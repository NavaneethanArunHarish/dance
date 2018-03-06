// var student_model = require("../Models/Student_model");
// // var paymentmodel = require("../Models/Payment_model")
// // var dancemodel = require("../Models/Dance_model")
// var scheduledetail = require('../Models/schedule_model');

// module.exports.create_student = function (create, callback) {
//     console.log("before  student dao", create);
//     var studentdata = new student_model(create);
//     console.log("student dao", studentdata);
//     studentdata.save(function (err) {
//         if (err) {
//             callback(err);
//         }

//         // scheduledetail.findOne({ _id: studentdata.schedule_id }, function (err, scheduleData) {
//         //     if (err) {
//         //         console.log("errr", err);
//         //     } else {
//         //         //console.log(story);

//         //          // var data = scheduleData;
//         //          scheduleData.count = scheduleData.count + 1

//         //          if( scheduleData.count >= scheduleData.maximum_student){
//         //             scheduleData.isFilled = true;
//         //          }

//         //         console.log("coubt", scheduleData.count);

//         //         scheduleData.save(function (err, updatedData) {
//         //             if (err) {
//         //                 console.log("rror in updating")
//         //             }
//         //             console.log("==========updatedData",updatedData)
//         //             callback(studentdata);
//         //         });
//         //         //  callback(studentdata);
//         //     }

//         // })
//         callback(studentdata);
//     })
// }


// module.exports.findByScheduleIdAndBookedStatus = function (create, callback) {

//     console.log("dao", create)

//     student_model.find({ schedule_id: create.schedule_id, alloted: true }, function (err, data) {
//         if (err) {
//             console.error("findonewithpayment ");
//         }
//         console.log("data", data)
//         callback(data);
//     })


// }


// module.exports.updateScheduleId = function (create, schedule_id, callback) {


//     student_model.findOneAndUpdate({ _id: create }, { $set: { schedule_id: schedule_id, alloted: true } }, { new: true }, function (err, doc) {
//         if (err) {
//             console.log("Something wrong when updating data!");
//         }
//         callback();
//     });


// }



// module.exports.findbydanceid = function (create, callback) {

//     student_model.find({ dance_id: create.dance_id, alloted: false }, function (err, data) {
//         // student_model.find().populate('payment_id').where({_id:findone}).exec(function(err,data){
//         if (err) {
//             console.error("findonewithpayment ");
//         }
//         console.log("data", data)
//         callback(data);
//     })

// }

// module.exports.update_student = function (update_student, callback) {
//     student_model.findOneAndUpdate({ _id: update_student._id },
//         {
//             $set: update_student
//         }, { upsert: true, new: true }, function (err, new_updated_student) {
//             if (err) {
//                 callback(err);
//             }
//             callback(new_updated_student);
//         });
// };

// module.exports.updatestudentwithpaymentid = function (update_student, callback) {

//     student_model.findOneAndUpdate({ _id: update_student._id }, {
//         $set: update_student
//     }, { upsert: true, new: true }, function (err, update_student) {
//         if (err) {
//             callback(err);
//         }

//         callback(update_student);
//     })
// }

// module.exports.delete_student = function (delete_student, callback) {
//     student_model.findByIdAndRemove(delete_student, function (err) {
//         if (err) {
//             callback(err);
//         }
//         callback({ message: "removed" });
//     })
// }

// module.exports.findbyid_student = function (student_id, callback) {
//     student_model.findById(student_id, function (err, student_data) {
//         if (err) {
//             callback(err);
//         }
//         callback(student_data);
//     })
// }

// module.exports.changeStudentStatus = function (student_id, callback) {
//    console.log("sadas",student_id)
//     student_model.findOneAndUpdate({ _id: student_id }, { $set: { alloted: false } }, { new: true }, function (err, doc) {
//         if (err) {
//             console.log("Something wrong when updating data!");
//         }
//         callback();
//     });

    
//     // student_model.findOneAndUpdate({ _id: student_id }, { $set: {alloted:false} }, { new: true }, function (err, doc) {
//     //     $set: update_student
//     // }, { upsert: true, new: true }, function (err, update_student) {
//     //     if (err) {
//     //         callback(err);
//     //     }

//     //     callback(update_student);
//     // })
// }

// module.exports.getall_student = function (callback) {
//     student_model.find().populate('payment_id dance_id batch_id').exec(function (err, student_details) {
//         if (err) {
//             callback(err);
//         }
//         callback(student_details);
//     })
// }

// module.exports.findbypaymentid = function (findone, callback) {
//     console.log("findbypaymentid----")
//     student_model.find({ payment_id: findone }, function (err, data) {
//         // student_model.find().populate('payment_id').where({_id:findone}).exec(function(err,data){
//         if (err) {
//             console.error("findonewithpayment ");
//         }
//         callback(data);
//     })
// }
// module.exports.getstudentbydanceid = function (id, callback) {
//     console.log("getstudentbydanceid-----", id);
//     student_model.find({ dance_id: id }, function (err, student_data) {
//         if (err) {
//             console.error("getstudentbyid---");
//         }
//         callback(student_data);
//     })
// }

// // module.exports.findallwithpayment = function(callback){
// //     student_model.find().populate('payment_id').exec(function(err,data){
// //         if(err){
// //             console.error("findallwithpayemnt in dao");
// //         }
// //         // student_model.count({data},function(err,data1){
// //         //     if(err){
// //         //         console.error("counting in amount")
// //         //     }
// //         //     console.log("resulting count in amount ",data1);
// //         // })
// //         callback(data);

// //     })
// // }

// module.exports.updatestudentwithbatchid = function (update_student, callback) {
//     console.log("updatestudeht in dao in ()()()()");
//     student_model.find({
//         batch_id: update_student.batch_id
//     })
//         .exec(function (err, output) {
//             console.log("entering into if in dao", output)
//             if (err) {
//                 callback(err);
//             }
//             else {
//                 var length = output.length;
//                 console.log("updatestudentwithbacth id in doa99999", length);
//                 if (length < 3) {
//                     student_model.findOneAndUpdate({ _id: update_student._id }, {
//                         $set: update_student
//                     }, { upsert: true, new: true }, function (err, update_student) {
//                         if (err) {
//                             callback(err);
//                         }
//                         console.log("+++++++++++++++++", update_student)
//                         callback(update_student);
//                     })
//                 }
//                 else {
//                     callback({ message: 'limit existed' })
//                 }
//             }
//         });
// }



// module.exports.getallstudentbybatchid = function (id, callback) {
//     console.log("getallstudentbybatchid-----", id);
//     student_model.find({ batch_id: id }, function (err, student_data) {
//         if (err) {
//             console.error("getallstudentbybatchid---");
//         }
//         callback(student_data);
//     })
// }
