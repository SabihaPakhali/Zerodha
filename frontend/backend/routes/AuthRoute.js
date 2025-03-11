const express = require("express");
const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    await Signup(req, res, next);
  } catch (error) {
    res.status(500).json({ message: "Signup Failed", error });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    await Login(req, res, next);
  } catch (error) {
    res.status(500).json({ message: "Login Failed", error });
  }
});

router.get("/verify", userVerification); // User Verification Route

module.exports = router;
