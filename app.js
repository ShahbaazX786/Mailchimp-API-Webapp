// jshint esversion:  6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
})


app.listen(3000, ()=>{
    console.log("server started at port 3000 broo!!");
})
