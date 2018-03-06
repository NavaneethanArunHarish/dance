var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/Batch_controller");

router.post("/create_batch",controller.create_batch);
router.put("/update_batch",controller.update_batch);
router.delete("/delete_batch/:id",controller.delete_batch);
router.get("/getall_batch",controller.getall_batch);
router.get("/findBatchById/:id",controller.findBatchById);
router.post("/getBatchDetailByDateRange",controller.getBatchDetailByDateRange);

module.exports = router;