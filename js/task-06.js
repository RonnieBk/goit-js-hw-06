"use strict";

const input = document.querySelector("#validation-input");
const validationLength = input.dataset.length;

console.log(validationLength);

input.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
  if (
    input.value.length === validationLength &&
    input.classList.contains("invalid")
  ) {
    input.classList.add("valid");
  } else if (input.classList.contains("valid")) {
    input.classList.replace("valid", "invalid");
  } else {
    input.classList.add("invalid");
  }
});
