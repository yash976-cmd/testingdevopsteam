const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to DevOps Demo App!");
});

// Health Check Route
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
