const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
////// not by task /////
// let list = ''
// for (let i = 0; i < ingredients.length; i += 1) {
//   list += `<li class="item">${ingredients[i]}</li>`
// }
// // console.log(list)
// const menu = document.getElementById('ingredients')
// menu.insertAdjacentHTML('afterbegin', list)

// console.log(menu)
/////////////////////////////

// By task (need .createElement)
const list = document.querySelector("#ingredients")
let listToAppend = [];
for (let elem of ingredients) {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");
  listToAppend.push(li)
}
list.append(...listToAppend)