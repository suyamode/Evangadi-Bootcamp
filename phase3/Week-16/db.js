require("dotenv").config();
const mysql = require("mysql2/promise");

const connector = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
});
async function connect() {
  try {
    const connection = await connector.getConnection();
    connection.release();
    console.log("Connected to MySQL database successfully!");
  } catch (error) {
    console.error("Database connection failed: ", error);
  }
}

connect();
module.exports = connector;
