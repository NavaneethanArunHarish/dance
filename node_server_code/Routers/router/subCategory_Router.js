var express = require("express")
var router = express.Router();
var subCategory_Controller = require("../../app/Controllers/subCategory_controller")
var authorize = require("../../app/Controllers/user_controller");

router.post("/create_subCategory",subCategory_Controller.create_subCategory)
// router.delete("/delete_attendance/:id",subCategory_Controller.delete_Attendance)
router.put("/update_subCategory",subCategory_Controller.update_subCategory)
router.get("/getall_subCategory",subCategory_Controller.getall_subCategory)

// router.put("/update_attendanceStatus",attendance_Controller.update_attendanceById)





module.exports = router ;