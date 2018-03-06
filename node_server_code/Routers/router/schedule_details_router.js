var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/schedule_details_controller");

router.post("/create_schedule_detail", controller.create_schedule_detail);
router.put("/update_schedule_detail", controller.update_schedule_detail);
router.delete("/delete_schedule_detail/:id", controller.delete_schedule_detail);
router.get("/getall_schedule_detail", controller.getall_schedule_detail);
router.post("/getScheduleDetailByDateRange", controller.getScheduleDetailByDateRange);
router.post("/getScheduleDetailByScheduleId", controller.getScheduleDetailByScheduleId);
router.post("/getScheduleDetailByCategoryId", controller.getScheduleDetailByCategoryId);
router.post("/getScheduleDetailByEventId", controller.getScheduleDetailByEventId);

module.exports = router;

