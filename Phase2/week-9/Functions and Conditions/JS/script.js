// HELPER FUNCTION
// ==========================================
// Returns true ONLY if input is a valid, finite number (filters out NaN, strings,...)
const isValidNumber = (num) => typeof num === "number" && !Number.isNaN(num);

// ==========================================
// QUESTIONS 1 - 14
// ==========================================

// Question 1
function myFirst() {
  console.log("Hello");
}
myFirst();

// Question 2
function mySecond(name) {
  console.log(`Hello ${name}`);
}
mySecond("Hanna");

// Question 3
function myThird(item) {
  mySecond(item);
}
myThird("Hanna"); // Logs "Hello Hanna"

// Question 4
function myFourth(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    console.log(arr[0]);
  }
}
myFourth([1, 2, 3]);

// Question 5
function myFifth(numbers) {
  if (Array.isArray(numbers) && numbers.length >= 2) {
    return numbers[0] + numbers[1];
  }
}
console.log(myFifth([2, 3])); // 5

// Question 6
function convertToSeconds(min) {
  return isValidNumber(min) ? min * 60 : undefined;
}

// Question 7
function increment(num) {
  return isValidNumber(num) ? num + 1 : undefined;
}
console.log(increment(8)); // 9

// Question 8
const area = (base, height) => {
  if (
    !isValidNumber(base) ||
    !isValidNumber(height) ||
    base <= 0 ||
    height <= 0
  ) {
    return "Please enter a valid input";
  }
  return 0.5 * base * height;
};
console.log(area(10, 5)); // 25

// Question 9
const totalNumberOfLegs = (chickens, cows, pigs) =>
  chickens <= 0 || cows <= 0 || pigs <= 0
    ? "Animal count can not be negative."
    : 2 * chickens + 4 * (cows + pigs);

// Question 10
const tripleNumbers = (arr) =>
  Array.isArray(arr) &&
  arr.length === 2 &&
  arr.every((num) => isValidNumber(num))
    ? arr[0] * 3
    : "You have entered invalid input. You should enter a number array of size 2.";

// Question 11
const compareTwoNumbers = (a, b) =>
  isValidNumber(a) && isValidNumber(b)
    ? a === b
    : "Invalid input. Only numbers are allowed.";

// Question 12
const isDivisibleByHundred = (a) =>
  isValidNumber(a) ? a % 100 === 0 : "That's not a number";
console.log(isDivisibleByHundred("g")); // "That's not a number"

// Question 13
const parityChecker = (a) =>
  Number.isInteger(a)
    ? a % 2 === 0
      ? "even"
      : "odd"
    : "Please type in a number";
console.log(parityChecker("23")); // "Please type in a number"

// Question 14 (Uses helper function)
function getGrade(score) {
  if (!isValidNumber(score) || score < 0 || score > 100) {
    return "Invalid Score";
  }
  if (score >= 90) return "Grade A";
  if (score >= 80) return "Grade B";
  if (score >= 70) return "Grade C";
  if (score >= 60) return "Grade D";
  return "Grade F";
}
console.log(getGrade(50)); // "Grade F"
