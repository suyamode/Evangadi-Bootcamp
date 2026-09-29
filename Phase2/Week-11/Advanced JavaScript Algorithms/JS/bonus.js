//Number 1
function detectWord(str) {
  return str
    .split("")
    .filter((item) => item === item.toLowerCase())
    .join("");
}
console.log(detectWord("abAFGHCebe")); //abebe
//Number 2
function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
}

// Example usage:
console.log(canNest([3, 4, 5], [2, 5, 7, 8])); // true
console.log(canNest([1, 2, 3, 4], [0, 6])); // true
console.log(canNest([3, 1], [4, 0])); // false
console.log(canNest([9, 9, 8], [8, 9])); // false
//Number 3
function isPrime(num) {
  if (num <= 1) return false;
  let i = 2;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}

function isMagicArray(arr) {
  if (!arr || arr.length === 0) return false;

  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }

  let primeSum = primes.reduce((acc, curr) => acc + curr, 0);

  return primeSum === arr[0];
}

console.log(isMagicArray([10, 5, 5])); // true
console.log(isMagicArray([21, 3, 7, 9, 11, 4, 6])); // true
console.log(isMagicArray([0, 6, 8, 20])); // true
console.log(isMagicArray([8, 5, -5, 5, 3])); // false
//Number 4
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Example usage:
console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334454]
console.log(minMax([1])); // [1, 1]
//Number 5
function returnFactors(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return [];
  }

  let factors = [];

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
      if (i * i !== num) {
        factors.push(num / i);
      }
    }
  }

  return factors.sort((a, b) => a - b);
}

// Examples:
console.log(returnFactors(12)); // [1, 2, 3, 4, 6, 12]
console.log(returnFactors(1)); // [1]
console.log(returnFactors(36)); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log(returnFactors(12));

//Number 6
function numberSplit(num) {
  return [Math.floor(num / 2), Math.ceil(num / 2)];
}

// Examples:
console.log(numberSplit(4)); // [2, 2]
console.log(numberSplit(10)); // [5, 5]
console.log(numberSplit(11)); // [5, 6]
console.log(numberSplit(-9)); // [-5, -4] (-4 is higher than -5)
