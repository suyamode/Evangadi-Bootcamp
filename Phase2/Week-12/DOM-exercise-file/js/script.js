/* ==========================================
   QUESTION 1
 ==========================================*/

// 1.1 Select the element with an id of "sample1"
const sample1 = document.getElementById("sample1");

// 1.2 Print the element itself on the console
console.log(sample1);

// 1.3 Print the content of the element on the console
console.log(sample1.textContent);

/*==========================================
  QUESTION 2
==========================================*/

// 2.1 Select "techCompanies" without using querySelector
const techCompanies = document.getElementById("techCompanies");
console.log(techCompanies);

// 2.2 Select "techCompanies" using querySelector
const techCompaniesQS = document.querySelector("#techCompanies");
console.log(techCompaniesQS);

// 2.3 Count total tech companies using querySelectorAll
const totalCompanies = document.querySelectorAll("#techCompanies li");
console.log(`Total tech companies: ${totalCompanies.length}`);

// 2.4 Select all elements with class "red" using both methods
const redElementsByClass = document.getElementsByClassName("red");
const redElementsQS = document.querySelectorAll(".red");
console.log("getElementsByClassName('red'):", redElementsByClass);
console.log("querySelectorAll('.red'):", redElementsQS);
const apple = document.querySelector(".apple");
console.log(apple);
apple.classList.remove("red");
console.log(redElementsByClass);
console.log(redElementsQS);
// 2.5 Create a new li HTML element with content "Facebook" and display on console
const facebookLi = document.createElement("li");
facebookLi.textContent = "Facebook";
console.log("Newly created element:", facebookLi);

// 2.6 Give the newly created element a class of "blue"
facebookLi.classList.add("blue");

// 2.7 Append next to the "Sony" li element
// const sonyLi = Array.from(techCompanies.querySelectorAll("li")).find(
//   (li) => li.textContent.trim() === "Sony",
// );
// if (sonyLi) {
//   sonyLi.after(facebookLi);
// }
techCompanies.appendChild(facebookLi);

// 2.8 Count blue tech companies and display inside "blueCompanies" div
const blueCompaniesCount = techCompanies.querySelectorAll("li.blue").length;
const blueCompaniesDiv = document.getElementById("blueCompanies");

if (blueCompaniesDiv) {
  blueCompaniesDiv.textContent = `Number of blue tech companies: ${blueCompaniesCount}`;
}

// ==========================================
// QUESTION 3
// ==========================================

// Function to add background color
function setLightBlueBackground() {
  document.body.style.backgroundColor = "#99ecff";
}

// Function to remove background color
function removeBackground() {
  document.body.style.backgroundColor = "transparent";
}

// Select elements and bind click events
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

if (yesBtn) yesBtn.addEventListener("click", setLightBlueBackground);
if (noBtn) noBtn.addEventListener("click", removeBackground);

// ==========================================
// QUESTION 4
// ==========================================

const adderForm = document.getElementById("adder");
const resultDiv = document.getElementById("sum");

if (adderForm) {
  adderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstInput = document
      .querySelector('input[name="first-value"]')
      .value.trim();
    const secondInput = document
      .querySelector('input[name="second-value"]')
      .value.trim();

    const val1 = Number(firstInput);
    const val2 = Number(secondInput);
    if (
      firstInput !== "" &&
      secondInput !== "" &&
      !isNaN(val1) &&
      !isNaN(val2)
    ) {
      const sum = val1 + val2;
      const average = sum / 2;

      const outputMessage = `Sum: ${sum} | Average: ${average}`;

      console.log(outputMessage);
      resultDiv.textContent = outputMessage;
      resultDiv.style.color = "black";
    } else {
      const errorMessage = "Please enter numerical values only";

      document.querySelectorAll("input").forEach((value) => {
        value.style.backgroundColor = "rgba(255,0,0,0.2)";
        value.style.border = "1px solid red";
      });
      console.log(errorMessage);
      resultDiv.textContent = errorMessage;
      resultDiv.style.color = "red";
    }
  });
}
