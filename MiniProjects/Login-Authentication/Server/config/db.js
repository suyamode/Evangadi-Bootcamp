import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
try {
  const connection = await pool.getConnection();
  console.log("Connected to database successfully");
  connection.release();
} catch (err) {
  console.error("Database connection failed: ", err.message);
}
export default pool;
