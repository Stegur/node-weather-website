const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/13d987d04d36eac4aa68960e535d9e8d/${latitude},${longitude}?units=si`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Не удалось подключиться к сервису погоды', undefined);
        } else if (body.error) {
            callback('Локация не найдена', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} Now ${body.currently.temperature}°C. Rain posibility ${body.currently.precipProbability}%`);
        }
    });
};

module.exports = forecast;