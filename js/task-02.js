const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newElem = document.createElement('li')
newElem.textContent = name
newElem.classList.add('item')

ingredients.append(newElem)

// Var 2
// const newElem = '<li class=item> mazafaka </li>'
// ingredients.insertAdjacentHTML('beforeend', newElem)


// let markup = ''
// for (let i=0, i<length, i+=1){
//   markup += '<li class=item> mazafaka ${name}</li>'
// }
// ingredients.insertAdjacentHTML('beforeend', markup)