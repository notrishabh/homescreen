const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SettingsBG = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("settingsbg", SettingsBG);
