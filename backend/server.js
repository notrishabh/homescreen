const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const todoRouter = require("./db/routes/todoRouter");
const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("err", () => {
	console.log("MongoDB error");
});

app.get("/", (req, res) => {
	res.send("server boiz");
});

app.use("/api", todoRouter);

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
