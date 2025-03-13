require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const cors = require("cors"); 
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express(); 

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200, // ✅ Prevents CORS preflight errors
  })
);


app.use(express.json()); 
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed", err));

// ✅ API Routes
app.use("/api", authRoute);

app.get("/", (req, res) => {
  res.send("✅ Backend is Running...");
});

// ✅ Sample Data Endpoints
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
}); 

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("✅ Order saved!");
});

// ✅ Start Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
