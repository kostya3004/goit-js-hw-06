const items = document.querySelector('#categories')
console.log(`Number of categories: ${items.children.length}`)

const cats = Array.from(items.children)
console.dir(cats)

for (const elem of items.children) {
    console.log(elem)
}