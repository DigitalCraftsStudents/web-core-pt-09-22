const imageContainer = document.getElementById("imageContainer");

let imageUrl;

const fetchAndDisplayImage = async () => { 
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const parsedResponse = await response.json();
    imageUrl = parsedResponse.message;
    imageContainer.innerHTML = `<img src="${imageUrl}"></img>`
}

fetchAndDisplayImage();