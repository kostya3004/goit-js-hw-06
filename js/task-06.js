const input = document.getElementById("validation-input");
input.addEventListener("blur", function () {
  if (Number(input.dataset.length) === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});