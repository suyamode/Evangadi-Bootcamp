// a. Import both functions with distinct names
import { myMultiplier as firstMultiplier } from "./myFirst.mjs";
import { myMultiplier as secondMultiplier } from "./mySecond.mjs";

// b & c. Pass 5 to both and display the outputs
console.log("First module result with 5:", firstMultiplier(5)); // Outputs: 10
console.log("Second module result with 5:", secondMultiplier(5)); // Outputs: 15

import fs from "node:fs/promises";
fs.appendFile(
  "results.txt",
  `The value of 14 when passed through the firstMultiplier function is ${firstMultiplier(14)}.`,
);

fs.appendFile(
  "results.txt",
  `\nThe value of 14 when passed through the secondMultiplier function is ${secondMultiplier(14)}`,
);

/*================= NODE SERVER =============

