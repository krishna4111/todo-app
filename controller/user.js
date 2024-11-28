const { User } = require("../model/user_schema.js");

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res
        .status(400)
        .send({ message: "userName , email and password are required" });
    }
    const user = await User.create({
      userName: userName,
      email: email,
      password: password,
    });
    await user.save();
    return res
      .status(200)
      .send({ message: "user created successfully", user: user });
  } catch (error) {
    console.error("error when creating user", error);
    res.status(500).send({ message: "cannot create user", error: error });
  }
};

module.exports = { createUser };
