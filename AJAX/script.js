const imageContainer = document.getElementById("imageContainer");

let imageUrl;

fetch("https://dog.ceo/api/breeds/image/random")
.then(resultFromFetch => resultFromFetch.json()
.then(resultFromJson => imageUrl = resultFromJson.message)
.then(() => imageContainer.innerHTML = `<img src="${imageUrl}"></img>`));