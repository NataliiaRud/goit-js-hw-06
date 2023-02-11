const validInputEl = document.querySelector("#validation-input");


validInputEl.addEventListener("blur", borderColor);

function borderColor() {
    if (Number(validInputEl.value.length) === Number(validInputEl.getAttribute("data-length"))) {
        validInputEl.classList.remove("invalid");
        validInputEl.classList.add("valid");   
    } else {
        validInputEl.classList.remove("valid");
        validInputEl.classList.add("invalid");
    }
}

