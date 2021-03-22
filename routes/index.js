const path = require("path");
const router = require("express").Router();

// API Routes

// If no API routes are hit, send the React app
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});