require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());

// Get all restaurants
app.get("/api/v1/monuments", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM monuments");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        monuments: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Get a restaurant
app.get("/api/v1/monuments/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM monuments WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        monuments: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Create a monument
app.post("/api/v1/monuments", async (req, res) => {
  try {
    const result = await db.query(
      "INSERT INTO monuments (name, location, entry_fees) VALUES ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.entry_fees]
    );
    res.status(200).json({
      status: "success",
      data: {
        monument: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a monument
app.put("/api/v1/monuments/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE monuments SET name = $1, location = $2, entry_fees = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.entry_fees, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        monument: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete a monument
app.delete("/api/v1/monuments/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM monuments WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
