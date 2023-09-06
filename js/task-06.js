"use strict";

const input = document.querySelector("#validation-input");
const validationLength = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
  input.classList.add("invalid");
  if (input.value.length === validationLength) {
    input.classList.replace("invalid", "valid");
  }
});
