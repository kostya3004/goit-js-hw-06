const input = document.getElementById("font-size-control");
const text = document.getElementById("text")

const changer = () => {
    text.style.fontSize = `${input.value}px`;
}
input.addEventListener("input",changer)