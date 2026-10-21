const express = require("express");
const router = express.Router();
const db = require("../db"); // Adjust path to point to your database connection file

// GET all Macs
router.get("/", async (req, res) => {
  try {
    const query = `
      SELECT * FROM Products 
      JOIN ProductDescription ON Products.product_id = ProductDescription.product_id 
      WHERE Products.category = 'mac'
    `;
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    console.error("Database error on /macs:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// GET single Mac by ID or URL
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const query = `
      SELECT * FROM Products 
      JOIN ProductDescription ON Products.product_id = ProductDescription.product_id 
      WHERE Products.product_id = ? OR Products.product_url = ?
    `;
    const [results] = await db.query(query, [productId, productId]);

    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(results);
  } catch (err) {
    console.error("Database error on single mac fetch:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

module.exports = router;
