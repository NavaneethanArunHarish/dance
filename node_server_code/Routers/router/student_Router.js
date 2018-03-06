var express = require('express');
var router = express.Router();
var student_controller = require("../../app/Controllers/student_controller");

router.post('/create_student',student_controller.create_student);
router.post('/updateScheduleId',student_controller.updateScheduleId);
router.post('/findByScheduleIdAndBookedStatus',student_controller.findByScheduleIdAndBookedStatus);
router.put('/update_student',student_controller.update_student);
router.delete("/delete_student/:id",student_controller.delete_student);
router.get("/findbyid_student/:id",student_controller.findbyid_student)
router.get("/changeStudentStatus/:id",student_controller.changeStudentStatus);


;
router.get("/getall_student",student_controller.getall_student);
router.put('/updatestudentwithpaymentid',student_controller.updatestudentwithpaymentid);
router.get('/findbypaymentid/:id',student_controller.findbypaymentid);
router.post('/findbydanceid',student_controller.findbydanceid);
router.get("/getstudentbydanceid/:id",student_controller.getstudentbydanceid);
//router.get('/findallwithpayment_student',student_controller.findallwithpayment);
router.put('/updatestudentwithbatchid',student_controller.updatestudentwithbatchid);
router.get("/getallstudentbybatchid/:id",student_controller.getallstudentbybatchid);
module.exports = router;