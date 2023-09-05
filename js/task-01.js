const categoriesList = document.querySelector("#categories");
const allCategories = categoriesList.querySelectorAll(".item");

const firstCategory = categoriesList.firstElementChild;
const secondCategory = firstCategory.nextElementSibling;
const thirdCategory = categoriesList.lastElementChild;

const firstCategoryName = firstCategory.firstElementChild.textContent;
const secondCategoryName = secondCategory.firstElementChild.textContent;
const thirdCategoryName = thirdCategory.firstElementChild.textContent;

const firstCategoryItems = firstCategory.lastElementChild.children;
const secondCategoryItems = secondCategory.lastElementChild.children;
const thirdCategoryItems = thirdCategory.lastElementChild.children;

console.log(`Number of categories: ${allCategories.length}`);

console.log(`Category: ${firstCategoryName}`);
console.log(`Elements: ${firstCategoryItems.length}`);

console.log(`Category: ${secondCategoryName}`);
console.log(`Elements: ${secondCategoryItems.length}`);

console.log(`Category: ${thirdCategoryName}`);
console.log(`Elements: ${thirdCategoryItems.length}`);
