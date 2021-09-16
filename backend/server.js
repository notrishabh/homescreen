const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const todoRouter = require("./db/routes/todoRouter");
const episodeRouter = require("./db/routes/episodeRouter");
const gloginRouter = require("./db/routes/gloginRouter");
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

app.use("/todoapi", todoRouter);
app.use("/episodeapi", episodeRouter);
app.use("/googlelogin", gloginRouter);

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
