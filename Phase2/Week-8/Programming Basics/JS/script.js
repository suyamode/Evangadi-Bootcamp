//question 1
console.log("A:", 24 > 3);
console.log("B:", 2 < "12");
console.log("C:", 0 == 2);
console.log("D:", 2.0 === 2);
console.log("E:", 2.0 == "2");
console.log("F:", 2 < "John");
console.log("G:", 2 > "John");
console.log("H:", "2" < "2");
console.log("I:", "2" > "12");
console.log("J:", 1 == 1 || 3 == 2 || 3 == 7);
console.log("K:", 1 == 1 && 2 == 2 && 3 == 7);
console.log("L:", 1 == 1 || (2 == 2 && 3 == 7));
console.log(
  "M:",
  (1 == true && 0 > true) ||
    "31" > "9" ||
    10 > 5 ||
    !("2" == "two" || 1 == "1"),
);

//question 2
//1
console.log("1" === 1); //false
console.log(1 == 1); //true
console.log(1 === 1); //true

//2
let n = 1 == true;
console.log(n); //n will be true
//3
let x = 10;
let y = x > 5 && x < 15;
console.log(y); //y will be true
//4
let z = 5;
z += 3;
console.log(z); //z will be 8;
//5
let u = 10;
let w = u++;
console.log(w);
console.log(u);
console.log(++u);
u++;
w = u;
console.log(w);
console.log(u); // w will be 10;
//6
let k = 1;
let t = k !== 2;
console.log(t); //t will be true
//7
console.log(+"2" + 2);
//8
console.log(7 % 3);
//9
console.log(2 + true);
//question 3
let a = 1,
  b = 2,
  c = a + b;
console.log(c);
//question 4
let fname = "Hana";
let lname = "Birhanu";
let fullName = fname + " " + lname;
console.log(fullName);
console.log(`${fname} ${lname}`);

function isPalindrome(str) {
  // 1. Remove all non-alphanumeric characters (spaces, punctuation) and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-0]/g, "");

  // 2. Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  // 3. Compare original cleaned string with reversed string
  return cleanStr === reversedStr;
}

// Examples:
console.log(isPalindrome("eye")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("121")); // true

/* console.log(typeof NaN);
console.log(2 > undefined); //false
console.log(typeof undefined);
console.log(Number(undefined));
console.log(2 > null);
console.log(Number(null));
console.log("2" > "abebe");
console.log("a".charCodeAt(0));*/
