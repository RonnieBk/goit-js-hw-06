const categoriesList = document.querySelector("#categories");
const allCategories = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", allCategories.length);

allCategories.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
