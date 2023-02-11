const inputSizeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputSizeEl.addEventListener("input", fontChanger);

function fontChanger() {
    spanEl.style.fontSize = `${inputSizeEl.value}px`; 
}
