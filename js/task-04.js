"use strict";

let counterValue = 0;
const result = document.querySelector("#value");
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  result.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  result.textContent = counterValue;
});
