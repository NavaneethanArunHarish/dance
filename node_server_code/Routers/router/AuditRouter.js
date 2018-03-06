var express = require("express");
var router = express.Router();
var auditController = require("../../app/Controllers/AuditController");

router.post("/create_audit",auditController.create_audit);
router.delete("/delete_audit/:id",auditController.delete_audit);
router.get("/getall_audit",auditController.getall_audit);
router.get("/findauditById/:id",auditController.findauditById);

module.exports = router;