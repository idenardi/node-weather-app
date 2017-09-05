const request = require('request');

var getWeather =  (address, callback) => {

    request({
        url: `https://api.darksky.net/forecast/a32fdbb17f1fb0adeb86b3a78c9bcc94/${address.latitude},${address.longitude}?units=si`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Forecast.io servers.');
        } else if (response.statusCode === 200){
             callback(undefined, {
                 temperature: body.currently.temperature,
                 apparentTemperature: body.currently.apparentTemperature
             });  
        } else {
             callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;