const express = require("express");
const settingsBGCtrl = require("../controllers/settingsBGCtrl");

const router = express.Router();

router.get("/getsettingbg", settingsBGCtrl.getBG);
router.put("/updatesettingsbg", settingsBGCtrl.updateBG);

module.exports = router;
