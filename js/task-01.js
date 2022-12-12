const items = document.querySelector('#categories')
console.log(`Number of categories: ${items.children.length}`)

// const categories = Array.from(items.children)
// const categories = [...items.children] (alternative)
// console.dir(categories)

for (const elem of items.children) {
    console.log(`Category: ${elem.firstElementChild.innerText}`)
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
}