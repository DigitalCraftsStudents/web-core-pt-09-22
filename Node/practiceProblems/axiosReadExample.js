const axios = require('axios');
const fs = require('fs')

axios.get('http://127.0.0.1:3000')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  // GET request for remote image in node.js
axios({
    method: 'get',
    url: 'https://images.dog.ceo/breeds/mix/charlie.jpg',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });