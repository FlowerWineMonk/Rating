"use strict";

//1. i need to write You seleceted ${rate} out of 5
//2. i need click button as well as function. (Hidden)

// in div varibales and click function using if/else

const circleOf1 = document.querySelector(".circle1");
const circleOf2 = document.querySelector(".circle2");
const circleOf3 = document.querySelector(".circle3");
const circleOf4 = document.querySelector(".circle4");
const circleOf5 = document.querySelector(".circle5");

const ratingOfNumbers = document.querySelector('.rating');

let a = 0;

const wholeCircle = [
  circleOf1, circleOf2, circleOf3, circleOf4, circleOf5
];

for (let i = 0; i < wholeCircle.length; i++) {
  const element = wholeCircle[i];


  element.addEventListener('click', function () {
      a = element.textContent;
      ratingOfNumbers.textContent = `You selected ${a} out of 5`;
 });
} 

// const init = function () {
//   if (ratingOfNumbers === circleOf1) {
//     document.querySelector(
//       ".rating"
//     ).textContent = `You selected ${circleOf1.textContent} out of 5`;
//   } else if (ratingOfNumbers === circleOf2) {
//     document.querySelector(
//       ".rating"
//     ).textContent = `You selected ${circleOf2.textContent} out of 5`;
//   } else if (ratingOfNumbers === circleOf3) {
//     document.querySelector(
//       ".rating"
//     ).textContent = `You selected ${circleOf3.textContent} out of 5`;
//   } else if (ratingOfNumbers === circleOf4) {
//     document.querySelector(
//       ".rating"
//     ).textContent = `You selected ${circleOf4.textContent} out of 5`;
//   } else if (ratingOfNumbers === circleOf5) {
//     document.querySelector(
//       ".rating"
//     ).textContent = `You selected ${circleOf5.textContent} out of 5`;
//   }
// };
const submit = document.getElementById("submitButton")

submit.addEventListener("click", function() {
  console.log(123)
})

// document.getElementById('submitButton').addEventListener('click', function() {
//   // init();

//   console.log(123123)

//   document.getElementById('firstDiv').classList.add("hidden")

//   document.getElementById("secondDiv").classList.remove("hidden")
// });

// circles
// circle[i].add {
// a = circle[i].textContent