const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	data: {
		type: String,
		required: true,
	},
	isDone: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model("todo", Todo);
