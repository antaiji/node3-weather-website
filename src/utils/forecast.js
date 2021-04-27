const request = require("postman-request");

const forecast = (lon, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c8c6a19c4463446fee168638af815b57&units=m&query=${lat},${lon}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service...", undefined);
    } else if (body.error) {
      callback("Unable to find weather location...", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
