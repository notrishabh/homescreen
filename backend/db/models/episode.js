const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Episode = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
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
