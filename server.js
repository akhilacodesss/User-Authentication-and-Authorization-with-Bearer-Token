const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connect DB
connectDB();

const authRoutes = require("./routes/authRoutes");

// test route
app.get("/", (req, res) => {
    res.send("API working");
});

app.use("/api/auth", authRoutes);

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});