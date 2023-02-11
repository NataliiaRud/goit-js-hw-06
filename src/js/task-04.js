
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueNumber = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueNumber.textContent = counterValue;
}); 
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueNumber.textContent = counterValue;
}); 



