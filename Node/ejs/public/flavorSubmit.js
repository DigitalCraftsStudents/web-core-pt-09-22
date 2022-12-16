const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(nameInput.value.length > 15) {
        nameInput.setCustomValidity("Must be less than 15 characters");
        nameInput.reportValidity();
    }
    console.log("submitting form")
  });
