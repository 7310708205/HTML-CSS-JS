let numOfSquares = 12;
let numOfGuess = 3;
let colors = generateColors(numOfSquares);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".squarebtn");
let chosenColor = anyColor();
let colorDisplay = document.querySelector("#colorDisplay");
let resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function () {
  colors = generateColors(numOfSquares);
  chosenColor = anyColor();
  colorDisplay.textContent = chosenColor;
  resetButton.textContent = "Change Colors";

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "rgb(127, 226, 228)";
});

colorDisplay.textContent = chosenColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, chosenColor);

    if (clickedColor == chosenColor) {
      colorDisplay.textContent = "You Won!!";
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } 
    else {
      this.style.backgroundColor = "#232323";
      colorDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i <squares.length; i++) {  
    squares[i].style.background = color;
  }
}

function anyColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(getNewColor) {
  let array = [];
  for (let i = 0; i < getNewColor; i++) {
    array.push(getAnyColor());
  }
  return array;
}

function getAnyColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
