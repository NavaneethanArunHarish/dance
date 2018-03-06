var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/schedule_controller");

router.post("/create_schedule", controller.create_schedule);
router.put("/update_schedule", controller.update_schedule);
router.delete("/delete_schedule/:id", controller.delete_schedule);
router.get("/getall_schedule", controller.getall_schedule);
router.get("/findbyeventanddate/:eventid", controller.findbyeventanddate);
router.post("/findbyeventIdAndstartTimeAndEndTime", controller.findbyeventIdAndstartTimeAndEndTime);
router.post("/findTrainerAvailabilityByDate", controller.findTrainerAvailabilityByDate);
router.post("/findSchedulesByEventId", controller.findSchedulesByEventId);
router.post("/findSchedulesByCategoryId", controller.findSchedulesByCategoryId);
router.post("/findSchedulesByEventIdForAvailability", controller.findSchedulesByEventIdForAvailability);
router.post("/findSchedulesByEventIdAndDate", controller.findSchedulesByEventIdAndDate);
router.post("/findHostsAssingedInScheduleWithinEventAndDate", controller.findHostsAssingedInScheduleWithinEventAndDate);
router.get("/findScheduleById/:scheduleid", controller.findScheduleById);
router.post("/scheduleAvailabilityChart", controller.scheduleAvailabilityChart);
router.post("/findSchedulesByDate", controller.findSchedulesByDate);
router.post("/findScheduleLocation", controller.findScheduleLocation);
router.post("/findScheduleLocationAndDate", controller.findScheduleLocationAndDate);
module.exports = router;

