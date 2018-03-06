var express = require("express");
var router = express.Router();
var controller = require("../../app/Controllers/assets_controller");

router.post("/create_asset",controller.create_asset);
router.put("/update_asset",controller.update_asset);
router.delete("/delete_asset/:id",controller.delete_asset);
router.get("/getall_asset",controller.getall_asset);
router.get("/findbybusinessid_asset/:business_id",controller.findbybusinessid_asset);
router.get("/findById/:id",controller.findById);
router.get("/findByAssetType/:id",controller.findByAssetType);

module.exports = router;