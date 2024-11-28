const express = require("express");
const userRouter = express.Router();
const { createUser } = require("../controller/user.js");

userRouter.post("/add", createUser);
// userRouter.get("/:id");
// userRouter.put("/:id");
// userRouter.delete("/:id");

module.exports = { userRouter };
