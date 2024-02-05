// const express = require('express')-->Common js
// const colors = require('colors') changed to module
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


// configure env
dotenv.config();

// rest object
const app = express()

// rest api 
app.get('/', (req, res) => {
    // res.send({
    //     message: "Welcome to DesiDhaniya"
    // })
    res.send(`<h1>Welcome to DesiDhaniya</h1>`)
})

// PORT 
const PORT = process.env.PORT

// Listen

app.listen(PORT, () => {
    console.log(`DesiDhaniya Running on PORT ${PORT}`.bgCyan.white)
})