var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/business_controller");

router.post("/create_business",controller.create_business);
router.put("/update_business",controller.update_business);
router.delete("/delete_business/:id",controller.delete_business);
router.get("/getall_business",controller.getall_business);
router.get("/findbyownerid/:ownerid",controller.findbyownerid_business);
router.get("/findById/:id",controller.findById);

module.exports = router;