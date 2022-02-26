const input = document.querySelector("#validation-input");
const lengthInput = Number(input.dataset.length);
console.log(lengthInput);
input.addEventListener("blur", (event) => {
  event.currentTarget.value.length === lengthInput
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});
