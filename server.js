const express = require('express');
const fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 5000);

app.get('/get-info/city/:city', (req, res) => {
    var city = req.params.city.substring(1);
    var qCity = toTitleCase(city);
    var respObj = queryByCity(qCity);
    res.send(JSON.stringify(respObj, null, 4));
});

app.get('/get-info/faa/:faa', (req, res) => {
    var faa = req.params.faa.substring(1);
    var qFaa = faa.toUpperCase();
    var respObj = queryByFAA(qFaa);
    res.send(JSON.stringify(respObj, null, 4));
});

app.listen(app.get('port'), () => {
    console.log('server is live');
});

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function queryByCity(city){
    city = city.split('_').join(' ');
    var outArr = [];
    var airports = JSON.parse(fs.readFileSync('airports.json'));
    airports.forEach(function(airport) {
        if(airport.city === city){
            outArr.push(airport);
        }
    });
    return outArr;
}

function queryByFAA(faa){
    var outArr = [];
    var airports = JSON.parse(fs.readFileSync('airports.json'));
    airports.forEach(function(airport) {
        if(airport.faa === faa){
            outArr.push(airport);
        }
    });
    return outArr;
}