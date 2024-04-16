const color = document.querySelector("#outer");
const shape = document.querySelector(".inner");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

function changeColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color.style.backgroundColor = randomColor;
}

button1.addEventListener("click", changeColor);

// Shape Change logic

let shape_arr = ["square", "circle", "triangle", "rectangle"];
let previous_Shape = null;

function changeShape() {
  let randomIndex;
  let randomShape;
  do {
    randomIndex = Math.floor(Math.random() * shape_arr.length);
    randomShape = shape_arr[randomIndex];
  } while (randomShape === previous_Shape);

  shape.className = randomShape;
  previous_Shape = randomShape;
}
button2.addEventListener("click", changeShape);