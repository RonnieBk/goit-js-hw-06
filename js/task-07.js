const inputSlider = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputSlider.addEventListener("input", () => {
  spanText.style.fontSize = `${inputSlider.value}px`;
});
