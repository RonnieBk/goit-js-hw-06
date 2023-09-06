function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputNumber = controls.querySelector("input");
const btnCreate = controls.querySelector("button[data-create]");
const btnDestroy = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  let n = 1;
  while (n <= amount) {
    const elementDiv = document.createElement("div");
    elementDiv.style.width = `${size}px`;
    elementDiv.style.height = `${size}px`;
    elementDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(elementDiv);
    size += 10;
    n++;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  createBoxes(inputNumber.value);
});
btnDestroy.addEventListener("click", destroyBoxes);
