const express = require("express");
const gloginCtrl = require("../controllers/gloginCtrl");

const router = express.Router();

router.post("/glogin", gloginCtrl.login);

module.exports = router;
