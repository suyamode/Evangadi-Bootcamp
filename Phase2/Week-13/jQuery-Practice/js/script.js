//===================  Question 1 ===================
// 1.1. Select the element with an id of "sample1" using jQuery
let sample1 = $("#sample1");
// 1.2. Print the element itself on the console upon refresh
console.log(sample1);
//1.3 Print the content of the element on the console upon page refresh. Use JQuery to select the content of the element.
console.log(sample1.text());
//================== Question 2 ===================
//2.1  Select the element with an ID of "techCompanies" and display it on your console
let techCompanies = $("#techCompanies");
console.log(techCompanies);
//2.2 How many tech companies are listed under the ul element with an id of "techCompaines"
console.log($("#techCompanies li").length);
//2.3 Select all elements with a class of "red" and display them on the console.
let redCompanies = $(".red");
console.log(redCompanies);
//2.4 Create a new li HTML element with a content of "Facebook" and display it on the console.
let faceBook = $("<li>Facebook</li>");
console.log(faceBook);
//2.5 Give the newly created element a class of "blue" using JQuery
faceBook.addClass("blue");
//2.6 Append the newly created element next to the "Sony" li element
techCompanies.append(faceBook);
//2.7 How many of the tech companies aee labled blue? Find the  result using JQuery and display  the result inside the "blueCompanies" div

let blueCompanies = $("#techCompanies .blue").length;
$("#blueCompanies").text(`Number of blue companies: ${blueCompanies}`);

//===================== Question 3 ======================

$("form")
  .first()
  .on("submit", function (e) {
    e.preventDefault();

    const $in1 = $("#in1");
    const $in2 = $("#in2");
    const firstInput = $in1.val().trim();
    const secondInput = $in2.val().trim();

    // Reset previous outputs and error stylings
    $("#dsum").text("");
    $("#davg").text("");
    $(".err").removeClass("error").text("").hide();
    $in1.removeClass("input-error");
    $in2.removeClass("input-error");

    // Validate inputs
    const isNum1Invalid = firstInput === "" || isNaN(firstInput);
    const isNum2Invalid = secondInput === "" || isNaN(secondInput);

    if (isNum1Invalid || isNum2Invalid) {
      const errMsg = "Please enter numerical values only";

      // Highlight the specific invalid field(s)
      if (isNum1Invalid) $in1.addClass("input-error");
      if (isNum2Invalid) $in2.addClass("input-error");

      // Display styled error message
      $(".err").addClass("error").text(errMsg).fadeIn();
      console.log(errMsg);
      return;
    }

    // Perform calculations
    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);
    const sum = num1 + num2;
    const average = sum / 2;

    // Display outputs
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
    $("#dsum").text(sum);
    $("#davg").text(average);
  });
//============== Question 4 ===================
