require("dotenv").config();
const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Import Routers
const macRouter = require("./routes/macs");
const iphoneRouter = require("./routes/iphones");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tables = [
  `CREATE TABLE IF NOT EXISTS Products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_url VARCHAR(255) NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        category VARCHAR(50)
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

// Create all tables via async/await
app.get("/install", async (req, res) => {
  const combinedQuery = tables.join("\n");

  try {
    await db.query(combinedQuery);
    console.log("All tables created successfully!");
    res.send("<h1>All tables created successfully!</h1>");
  } catch (err) {
    console.error("Error while creating tables: ", err.message);
    res.status(500).send("Error while creating tables: " + err.message);
  }
});

// Serve the index.html form on root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Modular Routes
app.use("/macs", macRouter);
app.use("/iphones", iphoneRouter);
app.use("/iphone", iphoneRouter);
app.post("/addiphones", iphoneRouter);

app.listen(PORT, () => {
  console.log(`Server started listening at http://localhost:${PORT}`);
});
