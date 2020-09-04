const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
    name: {
        type: String,
    },

    city: {
        type: String
    },

    state: {
        type: String
    },

    country: {
        type: String
    },

    lat: {
        type: String
    },

    lon: {
       type: String 
    },
    
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Airport = mongoose.model('Airport', AirportSchema)