require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// Get all restaurants
app.get("/api/v1/monuments", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      monuments: ["Taj Mahal", "India Gate"],
    },
  });
});

// Get a restaurant
app.get("/api/v1/monuments/:id", (req, res) => {
  console.log("Get single monument");
});

// Create a monument
app.post("/api/v1/monuments", (req, res) => {
  console.log(req.body);
});

// Update a monument
app.put("/api/v1/monuments/:id", (req, res) => {
  console.log(req.body);
});

// Delete a monument
app.delete("/api/v1/monuments/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
