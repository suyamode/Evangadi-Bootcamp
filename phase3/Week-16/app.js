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

// Question 2: Create all 5 tables via async/await
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

// Question 3: POST /addiphones
app.post("/addiphones", async (req, res) => {
  const { product_name, product_url } = req.body;

  if (!product_name || !product_url) {
    return res
      .status(400)
      .send("Please provide both Product Name and Product URL.");
  }

  const insertQuery = `
    INSERT INTO Products (product_name, product_url)
    VALUES (?, ?);
  `;

  try {
    const [result] = await db.query(insertQuery, [product_name, product_url]);

    console.log(`Product inserted successfully with ID: ${result.insertId}`);
    res.send(`
      <h2>Product Added Successfully!</h2>
      <p><strong>Product ID:</strong> ${result.insertId}</p>
      <p><strong>Name:</strong> ${product_name}</p>
      <p><strong>Product URL:</strong> ${product_url}</p>
      <br>
      <a href="/">Add Another Product</a>
    `);
  } catch (err) {
    console.error("Error inserting data into Products table:", err.message);
    res.status(500).send("Database Insertion Error: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server started listening at http://localhost:${PORT}`);
});
