require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/userModel"); // Import User Model

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "secretkey"; // JWT Secret Key

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Signup API Route
app.post("/api/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, username, password: hashedPassword });
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ message: "Signup successful!", token });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Something went wrong during signup" });
  }
});

// Holdings API
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Error fetching holdings" });
  }
});

// Positions API
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Error fetching positions" });
  }
});

// New Order API
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Error saving order" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Zerodha Backend!");
});

// Connect to MongoDB and Start Server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Database connected successfully!");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });





