const { Todo } = require("../model/todo_schema");

const createTodo = async (req, res) => {
  try {
    const { title, description, status, userId } = req.body;

    if (!title || !description || !status) {
      return res.status(400).send({
        message: "Title , status and description fields are required",
      });
    }

    const todo = await Todo.create({
      title: title,
      description: description,
      status: status,
      userId: userId,
    });
    await todo.save();
    return res
      .status(200)
      .send({ message: "Todo created successfully", todo: todo });
  } catch (error) {
    console.error("Error when creating a Todo", error);
    res.status(500).send({ message: "cant create this todo", error: error });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    return res.status(200).send({
      todos: todos.map((todo) => {
        return {
          id: todo._id,
          todoTitle: todo.title,
          todoDescription: todo.description,
        };
      }),
    });
  } catch (error) {
    console.error("Error when creating a Todo", error);
    res.status(500).send({ message: "cant get all todo", error: error });
  }
};
const getTodosById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res
        .status(400)
        .send({ message: "Wrong Todo Id , Please send a Valid Todo Id" });
    }
    return res.status(200).send({ todo: todo });
  } catch (error) {
    console.error("Error when creating a Todo", error);
    res.status(500).send({ message: "cant get  this todo", error: error });
  }
};
const updateTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(id, {
      title: title,
      description: description,
      status: status,
    });
    if (!updateTodo) {
      return res
        .status(400)
        .send({ message: "Wrong Todo Id , Please send a Valid Todo Id" });
    }
    return res
      .status(200)
      .send({ message: "Updated the Todo", todo: updateTodo });
  } catch (error) {
    console.error("Error when creating a Todo", error);
    res.status(500).send({ message: "cant create this todo", error: error });
  }
};

module.exports = { createTodo, getAllTodos, updateTodoById, getTodosById };
