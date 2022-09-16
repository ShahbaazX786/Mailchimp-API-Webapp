// jshint esversion:  6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public")); // used to link and load the static files like styles, images , icons etc via the express server

app.use(bodyParser.urlencoded({extended:true})); // used to parse the input info received in the form of post request. 

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
})

app.post('/',(req,res)=>{
    const body=req.body;
    const firstName=body.fName;
    const lastName=body.lName;
    const email=body.email;
    console.log(firstName,lastName,email);
})


app.listen(3000, ()=>{
    console.log("server started at port 3000 broo!!");
})
