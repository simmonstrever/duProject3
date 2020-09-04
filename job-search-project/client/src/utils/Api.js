import axios from "axios";
const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherbitKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleKey}`)
            .then(res => {
                // if no matching locations are found, break out/don't hit WeatherBit API
               console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}