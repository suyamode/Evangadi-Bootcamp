const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all iPhones

router.get("/", async (req, res) => {
  try {
    const query = `
      SELECT * FROM Products 
      LEFT JOIN ProductDescription ON Products.product_id = ProductDescription.product_id 
      LEFT JOIN ProductDetail ON Products.product_id = ProductDetail.product_id
      WHERE Products.category = 'iphone'
    `;
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    console.error("Database error on /iphones:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const query = `
      SELECT * FROM Products 
      LEFT JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
      LEFT JOIN ProductDetail ON Products.product_id = ProductDetail.product_id
      WHERE Products.product_id = ? OR Products.product_url = ?
    `;
    const [results] = await db.query(query, [productId, productId]);

    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(results[0]);
  } catch (err) {
    console.error("Error fetching single iphone:", err.message);
    res.status(500).send("Server Error: " + err.message);
  }
});

// POST route to add an iPhone
router.post("/add", async (req, res) => {
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    product_page_url,
    starting_price,
    price_range,
  } = req.body;

  try {
    const productQuery = `INSERT INTO Products (product_name, product_url, category) VALUES (?, ?, 'iphone')`;
    const [productResult] = await db.query(productQuery, [
      product_name,
      product_url,
    ]);
    const productId = productResult.insertId;

    const descQuery = `
      INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) 
      VALUES (?, ?, ?, ?, ?)
    `;
    await db.query(descQuery, [
      productId,
      product_brief_description,
      product_description,
      product_img,
      product_link,
    ]);

    const detailQuery = `
      INSERT INTO ProductDetail (product_id, product_page_url, starting_price, price_range) 
      VALUES (?, ?, ?, ?)
    `;
    await db.query(detailQuery, [
      productId,
      product_page_url,
      starting_price,
      price_range,
    ]);

    console.log(`Successfully added product and details for ID: ${productId}`);
    res.send(`
      <h2>Product and All Details Added Successfully!</h2>
      <p><strong>Product ID:</strong> ${productId}</p>
      <p><strong>Name:</strong> ${product_name}</p>
      <br>
      <a href="/">Add Another Product</a> | <a href="http://localhost:5173/iphone" target="_blank">View on React App</a>
    `);
  } catch (err) {
    console.error("Error inserting into tables:", err.message);
    res.status(500).send("Database Error: " + err.message);
  }
});

module.exports = router;
