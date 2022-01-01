const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52db9c667bb8894018d6932506f9419c&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Weather condition is ' + body.current.weather_descriptions[0] + ', It is currently ' + body.current.temperature + ' degress out. There is a ' + 
            body.current.precip + '% chance of rain. The wind is ' + body.current.wind_speed + ' km/h from ' + body.current.wind_degree + ' degrees.' )
        }
    })
}

module.exports = forecast