import os from "node:os";
//os module
console.log(os.freemem());
console.log(os.platform());
console.log(os.arch());
//fs module
import fs from "node:fs/promises";
const data = await fs.readFile("./myCollector.js", "utf8");
console.log(data);
/* ========= fs demo ===============
fs.writeFile(); // Asynchronous file writing
fs.writeFileSync(); // Synchronous file writing

fs.readFile(); // Asynchronous file reading
fs.readFileSync(); // Synchronous file reading

fs.open(); // Asynchronous open
fs.openSync(); // Synchronous open

fs.openAsBlob(); // Asynchronous, no synchronous counterpart

fs.opendir(); // Opens directory
fs.opendirSync(); // Synchronous directory open 
// 

fs.writeFile("filePath", "content", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("File written to!");
});
*/
async function promisesExample() {
  try {
    await fs.writeFile("filePath", "content is changed", "utf8");
    console.log("File written to!");
  } catch (err) {
    console.error("Error:", err);
  }
}

promisesExample();
