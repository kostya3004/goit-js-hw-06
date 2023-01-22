function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color")
const widget = document.querySelector(".widget")
const colorName = document.querySelector(".color")
const body = document.querySelector("body")

const changeBcg = () => {
  const tempColor = getRandomHexColor()
  body.style.backgroundColor = tempColor
  colorName.textContent = tempColor
}

button.addEventListener("click", changeBcg)
