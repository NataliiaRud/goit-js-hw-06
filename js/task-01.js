const categoryList = document.querySelector("#categories");
const categoriesCount = document.querySelectorAll("h2").length;
console.log("Number of categories: ", categoriesCount);
const categoryItems = [...categoryList.children];


categoryItems.forEach(item => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
 });
