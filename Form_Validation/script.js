const form = document.querySelector("form");
const nameInput = document.querySelector("#name");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(nameInput.value.length > 15) {
        nameInput.setCustomValidity("Must be less than 15 characters");
        nameInput.reportValidity();
    }
    console.log("submitting form")
  });

nameInput.addEventListener("input", (event) => {
    console.log(nameInput.value.length);
})