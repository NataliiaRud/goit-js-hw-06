const form = document.querySelector(".login-form");

form.addEventListener("submit", makeForm);
function makeForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("error");
  }
  const userProfile = {
    email: email.value,
    password: password.value,
  };
  console.log(userProfile);
  form.reset();
}
