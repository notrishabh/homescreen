const express = require("express");
const todoCtrl = require("../controllers/todoCtrl");

const router = express.Router();

router.post("/todo", todoCtrl.createTodo);
router.get("/gettodo", todoCtrl.getTodo);
router.put("/updatetodo/:id", todoCtrl.updateTodo);
router.delete("/deletetodo/:id", todoCtrl.deleteTodo);

module.exports = router;
