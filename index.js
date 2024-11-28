const express = require("express");
const app = express();
const { connectWithDb } = require("./db/db_connection.js");
const { todoRouter } = require("./routes/todo_route.js");
const { userRouter } = require("./routes/user_route.js");

app.use(express.json());

connectWithDb();

app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("your port is running on 3000");
});
