const express = require("express");
const episodeCtrl = require("../controllers/episodeCtrl");

const router = express.Router();

router.post("/episode", episodeCtrl.createEpisode);
router.get("/getepisode", episodeCtrl.getEpisode);
router.put("/updateepisode/:id", episodeCtrl.updateEpisode);
router.delete("/deleteepisode/:id", episodeCtrl.deleteEpisode);

module.exports = router;
