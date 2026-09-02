const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mysite", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);


// REGISTER API
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword
  });

  await user.save();

  res.json({ message: "Account created successfully" });
});


// LOGIN API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Wrong password" });
  }
});


// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});