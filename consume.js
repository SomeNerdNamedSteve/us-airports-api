const request = require('request');

request('https://us-airport-api.herokuapp.com/get-info/city/:boston', (err, body, response) => {
    console.log(response);
});