function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;

}




