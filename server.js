// import pacakge 
const express = require("express")
const cors = require("cors")
const app = express()

// import controler
const absen = require("./controller/AbsenController")

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// routing 
app.use("/api/absen", absen)


app.listen(3000, () => {
    console.log("connect to server")
})