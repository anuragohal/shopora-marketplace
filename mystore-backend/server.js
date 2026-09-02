const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());

// ✅ FIXED LARGE IMAGE / BASE64 ERROR
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({
  limit: "10mb",
  extended: true
}));

/* =========================
   MONGODB CONNECTION
========================= */
mongoose.connect("mongodb://127.0.0.1:27017/mystore")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* =========================
   USER SCHEMA
========================= */
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  shopName: String
});

const User = mongoose.model("User", userSchema);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  userId: String
});

const Product = mongoose.model("Product", productSchema);

/* =========================
   REGISTER API
========================= */
app.post("/register", async (req, res) => {
  try {
    const { username, email, password, shopName } = req.body;

    const newUser = new User({
      username,
      email,
      password,
      shopName
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Account created successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* =========================
   LOGIN API
========================= */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password
    });

    if (user) {
      res.json({
        success: true,
        message: "Login successful",
        user
      });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials"
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* =========================
   ADD PRODUCT API
========================= */
app.post("/add-product", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.json({
      success: true,
      message: "Product added successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product"
    });
  }
});

/* =========================
   GET PRODUCTS OF USER
========================= */
app.get("/products/:userId", async (req, res) => {
  try {
    const products = await Product.find({
      userId: req.params.userId
    });

    res.json(products);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
});

/* =========================
   DELETE PRODUCT
========================= */
app.delete("/delete-product/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed"
    });
  }
});

/* =========================
   ADMIN - GET ALL USERS
========================= */
app.get("/admin/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* =========================
   ADMIN - DELETE USER + PRODUCTS
========================= */
app.delete("/admin/delete-user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    await Product.deleteMany({
      userId: req.params.id
    });

    res.json({
      success: true,
      message: "User and products deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed"
    });
  }
});

/* =========================
   SERVER START
========================= */
app.listen(5000, () => {
  console.log("🔥 Server running on http://localhost:5000");
});