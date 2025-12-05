const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello from Ayan!, I have started learning about CICD and terraform !");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});