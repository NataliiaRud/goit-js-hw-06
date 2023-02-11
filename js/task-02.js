const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const arrayList = [];
ingredients.map((ingredient) => {
  const itemIngredient = document.createElement("li");
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add("item");
  arrayList.push(itemIngredient);
});
 

list.append(...arrayList); 


