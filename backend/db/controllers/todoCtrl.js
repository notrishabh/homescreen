const Todo = require("../models/todo");

let createTodo = (req, res, err) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide data",
		});
	}
	if (!body.isDone) {
		body.isDone = false;
	}
	const todo = new Todo(body);
	if (!todo) {
		return res.status(400).json({
			success: false,
			error: err,
		});
	}
	todo
		.save()
		.then(() => {
			return res.status(200).json({
				success: true,
				id: todo._id,
				message: "todo Created",
			});
		})
		.catch((err) => {
			return res.status(400).json({
				err,
				message: "todo not created",
			});
		});
};

let getTodo = async (req, res, err) => {
	await Todo.find({}, (err, todos) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!todos.length) {
			return res.status(200).json({ success: false, error: "Todo not found" });
		}
		return res.status(200).json({ success: true, allGet: todos });
	})
		.exec()
		.catch((err) => err.stack);
};

let updateTodo = async (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "No body to update provided",
		});
	}
	Todo.findOne({ _id: req.params.id }, (err, todo) => {
		if (err) {
			return res.status(400).json({ err, message: "Not found TODO" });
		}
		todo.data = body.data;
		todo.save().then(() => {
			res
				.status(200)
				.json({ success: true, id: todo._id, message: "Todo Updated" });
			return;
		});
	});
};

let deleteTodo = async (req, res) => {
	await Todo.findOneAndDelete({ _id: req.params.id }, (err, todo) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!todo) {
			return res.status(404).json({ success: false, error: "Todo not found" });
		}
		return res.status(200).json({ success: true, data: todo });
	})
		.exec()
		.catch((err) => err.stack);
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
