// myWebServer.js
import http from "http";
import fs, { stat } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { random } from "./myRandomNumber.js"; // Note: relative path must include the file extension
import express from "express";

const PORT = 1234;

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIME types lookup table for static assets
const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

// const server = http.createServer((req, res) => {
//   // Parse URL pathname using the URL API
//   const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
//   let pathname = decodeURIComponent(parsedUrl.pathname);

//   // Optional endpoint for Step 7: serve random number at /random
//   if (pathname === "/random") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     return res.end(`Random Number: ${random()}`);
//   }

//   // Step 8.c: Default root / or /about requests to about.html
//   if (pathname === "/" || pathname === "/about" || pathname === "/about.html") {
//     pathname = "/apple-html-css-replica/about.html";
//   }

//   // Step 8.e: Construct dynamic file path inside the 'static' directory
//   const filePath = path.join(__dirname, "static", pathname);

//   // Verify file existence and serve static asset
//   fs.stat(filePath, (err, stats) => {
//     if (err || !stats.isFile()) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404 File Not Found");
//       return;
//     }

//     const ext = path.extname(filePath).toLowerCase();
//     const contentType = MIME_TYPES[ext] || "application/octet-stream";

//     res.writeHead(200, { "Content-Type": contentType });

//     // Stream the requested file to the response
//     const fileStream = fs.createReadStream(filePath);
//     fileStream.pipe(res);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// ========================== USING EXPRESS ============================

const app = express();
app.get("/random", (req, res) => {
  res.send(`Random Number: ${random()}`);
});
const staticFolderPath = path.join(__dirname, "static");
app.get(["/", "/about", "/about.html"], (req, res) => {
  res.sendFile(
    path.join(staticFolderPath, "apple-html-css-replica", "about.html"),
  );
});

app.use(express.static(staticFolderPath));
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
