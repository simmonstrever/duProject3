const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const {check, validationResult} = require("express-validator")
const auth = require("../middleware/auth")
const User = require("../models/User")

// @route      GET api/Auth
// @desc       Test route
// @access     Public
router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch(err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})

// @route      POST api/auth
// @desc       authenitcate user and get token
// @access     Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a valid password').exists()
],
async(req, res) => {
    // ! checks the validation
   const errors = validationResult(req)
    
   //! we will get this if the users misses the validation 
   if(!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()})
   }

   // used to sign in to the user
   const {email, password} = req.body;
    
   // where our code will be
   try {
       // finds the see if the user exists
       let user = await User.findOne({email})

       // if user doesnt exist send the messsage below
       if(!user) {
          return res.status(400).json({errors: [ {msg: "Invalid Credentials"}]})
       }

       //compares the two passwords
       const isMatch = await bcrypt.compare(password, user.password);


       // if password is wrong invalid credentials
       if(!isMatch) {
        return res.status(400).json({errors: [ {msg: "Invalid Credentials"}]})
       }
        
       // ! i am confused on what this is doing
      //   ? what do the two below things do?????
       const payload = {
           user: {
               id: user.id
           }
       }
       // ! confused on the jwt stuff 
       // ! we will look at it more later
       jwt.sign(payload, config.get("jwtSecret"), {
           expiresIn: 3600000
       },
       (err, token) => {
           if(err) throw err;
           res.json({token})
       })

   } catch(err) {
    console.error(err.message)
    res.status(500).send('server error')
   }

})

module.exports = router