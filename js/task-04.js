const value = document.getElementById("value")

let counterValue = 0

function add() {
    counterValue += 1
    value.innerHTML = counterValue
}
function subtract() {
    counterValue -= 1
    value.innerHTML = counterValue
}
const addBtn = document.querySelector('[data-action="increment"]');
const subtractBtn = document.querySelector('[data-action="decrement"]');
addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click",subtract)


