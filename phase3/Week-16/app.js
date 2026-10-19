require("dotenv").config();
const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tables = [
  `CREATE TABLE IF NOT EXISTS Products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_url VARCHAR(255) NOT NULL,
        product_name VARCHAR(255) NOT NULL
    );`,

  `CREATE TABLE IF NOT EXISTS ProductDescription (
        description_id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        product_brief_description TEXT NOT NULL,
        product_description TEXT NOT NULL,
        product_img VARCHAR(255) NOT NULL,
        product_link VARCHAR(255) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
    );`,

  `CREATE TABLE IF NOT EXISTS ProductDetail (
        detail_id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        product_page_url VARCHAR(255) NOT NULL,
        starting_price VARCHAR(50) NOT NULL,
        price_range VARCHAR(100) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
    );`,

  `CREATE TABLE IF NOT EXISTS User (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL
    );`,

  `CREATE TABLE IF NOT EXISTS Orders (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        user_id INT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
    );`,
];

// Create all 5 tables via async/await
app.get("/install", async (req, res) => {
  const combinedQuery = tables.join("\n");

  try {
    await db.query(combinedQuery);
    console.log("All tables created successfully!");
    res.send("<h1>All 5 tables created successfully!</h1>");
  } catch (err) {
    console.error("Error while creating tables: ", err.message);
    res.status(500).send("Error while creating tables: " + err.message);
  }
});

// Serve the index.html form on root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API Route for Question 2 (Get All iPhones with LEFT JOIN)
app.get("/iphones", async (req, res) => {
  try {
    const query = `
      SELECT * FROM Products 
      LEFT JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
      LEFT JOIN ProductDetail ON Products.product_id = ProductDetail.product_id
    `;
    const [results] = await db.query(query);
    res.json(results);
  } catch (err) {
    console.error("Error fetching iphones:", err.message);
    res.status(500).send("Server Error: " + err.message);
  }
});

// API Route for Question 3 (Get Single iPhone by URL/ID with LEFT JOIN)
app.get("/iphone/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const query = `
      SELECT * FROM Products 
      LEFT JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
      LEFT JOIN ProductDetail ON Products.product_id = ProductDetail.product_id
      WHERE Products.product_url = ?
    `;
    const [results] = await db.query(query, [productId]);

    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(results[0]);
  } catch (err) {
    console.error("Error fetching single iphone:", err.message);
    res.status(500).send("Server Error: " + err.message);
  }
});

// POST route to populate all 3 tables at once via the admin form
app.post("/addiphones", async (req, res) => {
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
    // 1. Insert into Products table
    const productQuery = `INSERT INTO Products (product_name, product_url) VALUES (?, ?)`;
    const [productResult] = await db.query(productQuery, [
      product_name,
      product_url,
    ]);
    const productId = productResult.insertId;

    // 2. Insert into ProductDescription table
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

    // 3. Insert into ProductDetail table
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

app.listen(PORT, () => {
  console.log(`Server started listening at http://localhost:${PORT}`);
});
