const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");
console.log(textInput)
console.log(textOutput)

// textInput.addEventListener("input", (event) => {
//     if (!textInput) {
//         textOutput.textContent = "Anonymous"
//     } else {
//         textOutput.textContent = event.currentTarget.value
//         console.log(textInput.value.length)
//     }})


// textInput.addEventListener("input", (event) => {
//     if (textInput) {
//         textOutput.textContent = event.currentTarget.value
//     } else {
//         textOutput.textContent = "Anonymous"
//     }})






textInput.addEventListener("input", (event) => {
    return event.currentTarget.value
    ? (textOutput.textContent = event.currentTarget.value)
    : (textOutput.textContent = "Anonymous")
    })