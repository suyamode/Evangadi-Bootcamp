//================== Number 1 ================
function printNumbers() {
  for (let i = 1; i <= 10; i++) console.log(i);
}
printNumbers();
//=========== Number 2 ================
function printTheNextFive(num) {
  if (!Number.isInteger(num)) return "Invalid number";
  for (let i = num; i <= num + 5; i++) console.log(i);
}
//============ Number 3 =================
function sumOfNextTen(num) {
  if (!Number.isInteger(num)) return "Invalid number";
  let sum = 0;
  for (let i = num + 1; i <= num + 10; i++) sum += i;
  return sum;
}
console.log(sumOfNextTen(7));
//=========== Number 4 ==================
function PrintArray(arr) {
  if (!Array.isArray(arr)) return "That's not an array";
  0.3;

  arr.forEach((item) => console.log(item));
}
// // function printArray(arr){
// if (!Array.isArray(arr)) return "That's not an array";
// for(let i=0;i<arr.length;i++)
//   console.log(i);
// }
// //
PrintArray([1, 3, 4, 5]);
//========== Number 5 ================
function getSizeOfArray(arr) {
  if (!Array.isArray(arr)) return "That's not an array!";
  console.log("Total Number Of Elements: ", arr.length);
}
getSizeOfArray([1, 2, 4, 5, "hello"]);
//=========== Number 6 ==================
function getSumOfArray(arr) {
  let sum = arr
    .filter((num) => typeof num === "number" && Number.isFinite(num))
    .reduce((acc, curr) => acc + curr, 0);
  console.log("Sum of the numbers:", sum);
  return sum;
}

getSumOfArray([1, 2, 3, 5, "hello"]);
getSumOfArray(["hello", "world"]);
getSumOfArray([1, 2, true]);

//============= Number 7 ===================
function evenOddDifference(arr) {
  if (!Array.isArray(arr)) return;

  const isValidInteger = (num) => Number.isInteger(num);

  const evenSum = arr
    .filter((num) => isValidInteger(num) && num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  const oddSum = arr
    .filter((num) => isValidInteger(num) && Math.abs(num) % 2 === 1)
    .reduce((acc, curr) => acc + curr, 0);

  const difference = evenSum - oddSum;
  console.log("The difference of even and odd sums: ", difference);
  return difference;
}

//=============== Number 8 ==============
function printEvenIndices(arr) {
  if (!Array.isArray(arr)) return;
  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      console.log(`Index ${index}:`, item);
    }
  });
}

printEvenIndices(["a", "b", "c", "d", "e"]);
printEvenIndices([1, 2, 3, 4, 5]);

//============= Number 9 ================
function removeAndAdd(arr) {
  if (!Array.isArray(arr)) return "That's not an array!";
  arr.pop();
  arr.push(32);
  console.log(arr);
}
removeAndAdd([1, 2, 3, 4]);
//================= Number 10 ==============
function sortArray(arr) {
  if (!Array.isArray(arr)) return "That's not an array 😅";
  const sorted = arr.sort((a, b) => a - b);
  console.log(arr);
}
sortArray([4, 5, 2, "a", "a,", "b"]);
//================ Number 11-14 ==================
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
//Number 11
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass);
//Number 12
evangadiClass.topicsCovered.push("BootStrap");
console.log(evangadiClass);
//Number 13
function averageCalculator(evangadiClass) {
  if (!evangadiClass?.students?.length) {
    console.log("No students found.");
    return 0;
  }

  const totalAge = evangadiClass.students.reduce(
    (acc, curr) => acc + curr.age,
    0,
  );

  const average = totalAge / evangadiClass.students.length;

  console.log("Average age of the class:", average);
}

averageCalculator(evangadiClass);
//Number 14
function malePercentage(evangadiClass) {
  if (!evangadiClass?.students?.length) {
    console.log("No students found.");
    return 0;
  }
  const maleCount = evangadiClass.students.filter((stu) => stu.sex === "M");
  const percentage = (maleCount.length / evangadiClass.students.length) * 100;

  console.log("Male percentage: ", percentage, "%");
}
malePercentage(evangadiClass);
//============= Puzzles ============
//=========Number 15 ============
function divByThree(high, low) {
  if (!(Number.isInteger(high) && Number.isInteger(low)))
    return "Invalid Input";
  const max = Math.max(high, low);
  const min = Math.min(high, low);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
    console.log(i, i % 3 === 0 ? "div3" : "");
  }
}
divByThree(3, 9);
//========== Number 16 ==============
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
  }
}
fizzBuzz();
//============= Number 17 =============
function isEvens(number) {
  if (typeof number === "string" && number.trim() === "")
    return "Invalid number";
  const absNum = Math.abs(Number(number));
  if (!Number.isInteger(absNum)) return "Invalid number";
  const arr = Array.from(String(absNum), Number);
  return Number(arr.every((num) => num % 2 === 0));
}
console.log(isEvens("246"));
