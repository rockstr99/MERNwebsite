require('dotenv').config()

const mongoose = require('mongoose');
const express = require ('express')
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const authRoutes = require("./routes/auth.js")
 

//This is my DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
})

//This is my middle wares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//MY Routes
app.use("/api",authRoutes)

//PORT
const port = process.env.PORT || 8000
//Starting a server
app.listen(port, () => {
    console.log(`App is running at ${port}`)
})
