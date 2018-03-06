var express = require("express")
var router = express.Router();
var attendance_Controller = require("../../app/Controllers/attendance_controller")
var authorize = require("../../app/Controllers/user_controller");

router.post("/create_attendance",attendance_Controller.create_attendance)
router.delete("/delete_attendance/:id",attendance_Controller.delete_Attendance)
router.put("/update_attendance",attendance_Controller.update_attendance)
router.get("/getall_attendance",attendance_Controller.getall_Attendance)
router.post('/find_attendanceByDate',attendance_Controller.findAttendanceByDate)
router.put("/update_attendanceStatus",attendance_Controller.update_attendanceById)





module.exports = router ;