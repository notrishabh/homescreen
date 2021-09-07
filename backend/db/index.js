const mongoose = require("mongoose");
require("dotenv").config();
const pass = process.env.DB_PASS;
const user = process.env.DB_USER;
mongoose.connect(
	`mongodb+srv://${user}:${pass}@cluster0.tb58s.mongodb.net/mainDB?retryWrites=true&w=majority`
);

const db = mongoose.connection;

module.exports = db;
