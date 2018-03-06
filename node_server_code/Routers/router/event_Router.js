var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/event_controller");

router.post("/create_event",controller.create_event);
router.get("/getall_event",controller.getall_event);
router.delete("/delete_event/:id",controller.delete_event); 
router.put("/update_event",controller.update_event);
router.post("/find_by_category_id",controller.find_by_catergory_id);
router.get("/findbyhostid/:hostid",controller.findbyhostid_event);
router.get("/findbyassetid/:assetid",controller.findbyassetid_event);
router.get("/findbybusinessid/:business_id",controller.findbybusinessid_event);
router.get("/findById/:id",controller.findById);
router.get("/findByIdEventType/:id",controller.findByIdEventType);
router.post("/findEventsByDate",controller.findEventsByDate);
router.get("/geteventbydanceid/:id",controller.geteventbydanceid);
router.put("/findeventBytraineridanddancerid",controller.findeventBytraineridanddancerid);
router.post("/findeventByCategoryId",controller.findeventByCategoryId);

module.exports = router;