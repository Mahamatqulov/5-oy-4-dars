//11-misol
// const cityInput = document.getElementById("cityInput");
// const cityList = document.getElementById("cityList");
// const shaharlar = cityList.getElementsByTagName("li");

// cityInput.addEventListener("input", function () {
//   const filter = cityInput.value.toLowerCase();

//   for (let i = 0; i < shaharlar.length; i++) {
//     const city = shaharlar[i].textContent.toLowerCase();
//     if (city.includes(filter)) {
//       shaharlar[i].style.display = "";
//     } else {
//       shaharlar[i].style.display = "none";
//     }
//   }
// });

//12-misol

// const counter = document.querySelector("p");
// const backward = document.getElementById("backward");
// const forward = document.getElementById("forward");
// const image = document.querySelector("img");

// let currentImage = 1;
// counter.textContent = `Image-${currentImage}/10`;

// backward.addEventListener("click", () => {
//   currentImage--;
//   if (currentImage < 1) {
//     currentImage = 10;
//   }
//   counter.textContent = `Image-${currentImage}/10`;
//   image.src = `https://picsum.photos/id/${currentImage}/1200`;
// });

// forward.addEventListener("click", () => {
//   currentImage++;
//   if (currentImage > 10) {
//     currentImage = 1;
//   }
//   counter.textContent = `Image-${currentImage}/10`;
//   image.src = `https://picsum.photos/id/${currentImage}/1200`;
// });

//13-misol

// const boldButton = document.getElementById("boldButton");
// const paragraph = document.getElementById("paragraph");

// boldButton.addEventListener("click", () => {

//   const selection = window.getSelection();
//   const selectedText = selection.toString();

//   if (selectedText) {
//     const range = selection.getRangeAt(0);
//     const boldSpan = document.createElement("b");
//     boldSpan.textContent = selectedText;
//     range.deleteContents();
//     range.insertNode(boldSpan);

//     selection.removeAllRanges();
//   }
// });

//14-misol

//15-misol

// const numbersInput = document.getElementById("numbersInput");
// const showEvensButton = document.getElementById("showEvens");
// const result = document.getElementById("result");

// showEvensButton.addEventListener("click", () => {
//   const evenNumbers = numbersInput.value
//     .split(",")
//     .map(Number)
//     .filter((num) => num % 2 === 0);

//   result.textContent = evenNumbers.join(", ");
// });

//16-misol
// const num1Input = document.getElementById("num1");
// const num2Input = document.getElementById("num2");
// const resultDisplay = document.getElementById("result");

// function add() {
//   const num1 = Number(num1Input.value);
//   const num2 = Number(num2Input.value);
//   const result = num1 + num2;
//   resultDisplay.textContent = `Natija: ${result}`;
// }

// function subtract() {
//   const num1 = Number(num1Input.value);
//   const num2 = Number(num2Input.value);
//   const result = num1 - num2;
//   resultDisplay.textContent = `Natija: ${result}`;
// }

// function multiply() {
//   const num1 = Number(num1Input.value);
//   const num2 = Number(num2Input.value);
//   const result = num1 * num2;
//   resultDisplay.textContent = `Natija: ${result}`;
// }

// function divide() {
//   const num1 = Number(num1Input.value);
//   const num2 = Number(num2Input.value);
//   if (num2 === 0) {
//     resultDisplay.textContent = "Nolga bo'lish mumkin emas!";
//   } else {
//     const result = num1 / num2;
//     resultDisplay.textContent = `Natija: ${result}`;
//   }
// }

// document.getElementById("add").addEventListener("click", add);
// document.getElementById("subtract").addEventListener("click", subtract);
// document.getElementById("multiply").addEventListener("click", multiply);
// document.getElementById("divide").addEventListener("click", divide);

//17-misol
// const rangeInput = document.getElementById("fontSizesoz");
// const heading = document.getElementById("soz");

// rangeInput.addEventListener("input", () => {
//   const fontSize = rangeInput.value + "px";
//   heading.style.fontSize = fontSize;
// });

//18-misol
// const toggleButton = document.getElementById("toggleInstructions");
// const instructions = document.getElementById("instructions");

// toggleButton.addEventListener("click", () => {
//   if (instructions.style.display === "none") {
//     instructions.style.display = "block";
//   } else {
//     instructions.style.display = "none";
//   }
// });

//19-misol

// 20-misol
// const coloredText = document.getElementById("coloredText"); // <p> elementini olish
// const changeTextColorButton = document.getElementById("changeTextColor");
// const changeBgColorButton = document.getElementById("changeBgColor");

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// changeTextColorButton.addEventListener("click", () => {
//   const newTextColor = getRandomColor();
//   coloredText.style.color = newTextColor;
// });

// changeBgColorButton.addEventListener("click", () => {
//   const newBgColor = getRandomColor();
//   document.body.style.backgroundColor = newBgColor;
// });

//21-misol

// const numberInput = document.getElementById("numberInput");
// const checkNumberButton = document.getElementById("checkNumber");
// const numberOutput = document.getElementById("numberOutput");

// checkNumberButton.addEventListener("click", () => {
//   const number = Number(numberInput.value);

//   if (number > 0) {
//     numberOutput.textContent = "Musbat raqam";
//   } else if (number < 0) {
//     numberOutput.textContent = "Manfiy raqam";
//   } else {
//     numberOutput.textContent = "Nol";
//   }
// });
