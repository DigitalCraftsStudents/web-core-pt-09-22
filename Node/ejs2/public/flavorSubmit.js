const form = document.querySelector("form");
const nameInput = document.querySelector("#name");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    axios.post(`/flavors`, {flavorName:nameInput.value, flavorCategory:"awesome"}).then((r)=>{
    console.log(r)
    })
    .catch((e)=>{
        console.error(e);
    })
    // if(nameInput.value.length > 15) {
    //     nameInput.setCustomValidity("Must be less than 15 characters");
    //     nameInput.reportValidity();
    // }
   // console.log("submitting form")
  });
