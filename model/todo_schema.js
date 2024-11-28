const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    userId: { type: mongoose.Schema.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todos", todoSchema);
module.exports = { Todo };
