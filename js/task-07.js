const input = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");
input.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
