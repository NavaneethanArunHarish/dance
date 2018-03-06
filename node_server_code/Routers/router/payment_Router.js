var express = require("express");
var router = express.Router();
var payment_controller = require("../../app/Controllers/payment_controller");

router.post("/create_payment",payment_controller.create_payment);
router.put("/update_payment",payment_controller.update_payment);
router.delete("/delete_payment/:id",payment_controller.delete_payment);
router.get("/findbyid_payment/:id",payment_controller.findbyid_payment);
router.get("/getall_payment",payment_controller.getall_payment);

module.exports = router;