function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");


buttonCreate.addEventListener("click", createEl);
 buttonDestroy.addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    divBox.style.width = `${ i * 10 + 30 }px`;
    divBox.style.height = `${ i * 10 + 30 }px`;
    divBox.style.backgroundColor = getRandomHexColor();
    array.push(divBox);
  }
numberOfBoxes.append(...array);
}

function createEl() {
  createBoxes(input.value);
  
}
function destroyBoxes() {
  numberOfBoxes.innerHTML = "";
}











// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.