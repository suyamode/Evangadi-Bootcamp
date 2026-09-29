/*=========== Number 1 =================
Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]*/
function getOnlyEvens(arr) {
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number"))
    return "That's not an a number array";
  let evens = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) evens.push(arr[i]);
  }
  return evens;
}
console.log(getOnlyEvens([1, 2, 3, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, "b"]));
/*============== Number 2 ===============
Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32*/
function reverseCompare(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return "That's not an integer number";
  }
  if (num < 10 || num > 99) {
    return "Input must be only 2 digit number";
  }

  let str = String(num);
  // let reversedStr = str.split("").reverse().join("");

  // return str >= reversedStr ? "Ok" : "Not ok";

  let reversedStr = str[1] + str[0];
  return str > reversedStr ? "Ok" : "Not ok";
}
console.log(reverseCompare(75));
console.log(reverseCompare(27));
/*============== Number 3 ==============
Write a function that takes a positive integer and returns the factorial of the 8number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1
*/
const returnFactorial = (num) => {
  if (typeof num !== "number" || num < 0) return "That's invalid input.";
  num < 1 ? 1 : num * returnFactorial(num - 1);

  // return Array.from({length:num},(_,i)=>i+1).reduce((product,value)=>product*value,1)
};

console.log(returnFactorial(5));
console.log(returnFactorial(6));
console.log(returnFactorial(0));
/*================ Number 4 =================
A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
*/
function checkMeera(arr) {
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number"))
    return "Only array of numbers is allowed!";
  // return arr.some((num) => arr.includes(num * 2) && num !== 0)
  //   ? "I'm NOT a Meera array"
  //   : "I am a Meera array";

  for (let i = 0; i < arr.length; i++)
    if (arr.includes(arr[i] * 2)) return "I am Meera array";
  return "I'm NOT a Meera array";
}

console.log(checkMeera([7, 4, 9]));
console.log(checkMeera([10, 4, 0, 5]));
console.log(checkMeera([1, -6, 4, -3]));
/*============== Number 5 ====================
Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/
function isDual(arr) {
  // 1. Validation check
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
    return "Only array of numbers is allowed!";
  }
  if (arr.length % 2 !== 0) return 0;
  const counts = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (const count of Object.values(counts)) {
    if (count !== 2) return 0;
  }

  return 1;
}
/*============== Number 6 ====================
Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
*/
function digitalClock(sec) {
  if (typeof sec !== "number" || sec < 0 || !Number.isFinite(sec)) {
    return "Invalid input";
  }
  let hours = Math.floor(sec / 3600) % 24;
  let min = Math.floor((sec % 3600) / 60);
  let seconds = Math.floor(sec % 60);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMin = String(min).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMin}:${formattedSec}`;
}

console.log(digitalClock(5025)); // "01:23:45"
console.log(digitalClock(61201)); // "17:20:01"
console.log(digitalClock(87000)); // "00:10:00"
console.log(digitalClock(90000)); // "01:00:00"
