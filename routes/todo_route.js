const express = require("express");
const todoRouter = express.Router();
const {
  getTodosById,
  updateTodoById,
  getAllTodos,
  createTodo,
} = require("../controller/todo.js");

todoRouter.post("/add", createTodo);
todoRouter.get("/getall", getAllTodos);
todoRouter.get("/:id", getTodosById);
todoRouter.put("/:id", updateTodoById);

module.exports = { todoRouter };
