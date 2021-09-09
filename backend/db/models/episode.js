const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Episode = new Schema({
	data: {
		type: String,
		required: true,
	},
	episodeNumber: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("episode", Episode);
