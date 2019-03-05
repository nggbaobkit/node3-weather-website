const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/82b8e9e8c34870894a8c223eb306d77f/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' 
            + body.currently.precipProbability + '% chance of rain. The highest temp is ' + body.daily.data[0].temperatureHigh + ' and the lowest is ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast