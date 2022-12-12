const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = ''
for (let i = 0; i < ingredients.length; i += 1) {
  list += `<li class="item">${ingredients[i]}</li>`
}
// console.log(list)
const menu = document.getElementById('ingredients')
menu.insertAdjacentHTML('afterbegin', list)

console.log(menu)



// const newElem = document.createElement('li')
// newElem.textContent = name
// newElem.classList.add('item')

// ingredients.append(newElem)

// Var 2
// const newElem = '<li class=item> name </li>'
// ingredients.insertAdjacentHTML('beforeend', newElem)


// let list = ''
// for (let i=0, i<length, i+=1){
//   list += '<li class=item> mazafaka ${name}</li>'
// }
// ingredients.insertAdjacentHTML('beforeend', list)