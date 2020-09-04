//bring in the express package
const express = require("express")
const connectDB = require("./config/db")

//use the express package
const app = express()

//connect the database
connectDB();

//Init Middleware
app.use(express.json({extend: true}))

app.get("/", (req, res) => res.send("working?"))

//define the routes
app.use('/api/users', require("./routes/users"))
app.use('/api/auth', require("./routes/auth"))
app.use("/api/airport", require("./routes/airport"))

//Get the port number
const PORT = process.env.PORT || 5000;

//Listen on port 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))