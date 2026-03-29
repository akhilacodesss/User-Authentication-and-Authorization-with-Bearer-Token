const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

// routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

// protected route
router.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "User profile",
        user: req.user
    });
});

module.exports = router;