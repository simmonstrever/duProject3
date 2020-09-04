const express = require("express")
const router = express.Router()
const Airport = require("../models/Airport")

router.post("/", async (req, res) => {
    const newAirport = new Airport ({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        lat: req.body.lat,
        lon: req.body.lon,
    })

    const airport = await newAirport.save();
    res.json(airport)
})

module.exports = router