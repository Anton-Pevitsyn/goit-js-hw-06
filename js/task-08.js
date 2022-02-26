const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполни все поля!!");
  }
  console.log(event);
  console.log ({email: email.value, password:password.value});
  event.currentTarget.reset();
}
