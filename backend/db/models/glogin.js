const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Glogin = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("glogin", Glogin);
