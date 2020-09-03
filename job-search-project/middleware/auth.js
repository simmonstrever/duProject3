// require our packages
const jwt = require('jsonwebtoken')
const config = require("config")

// exporting a middleware function 
module.exports = function(req, res, next) {
    // Get Token from header
    const token = req.header('x-auth-token')

    // check if not token
    if(!token) {
        return res.status(401).json({msg: "No token, authorization denied"})
    }

    // if there is token
    try {
        // ! this decodes it
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        // ! gets the users profile
        req.user = decoded.user;
        next()
    } catch(err) {
        res.status(401).json({msg: 'token is not valid'})
    }
}