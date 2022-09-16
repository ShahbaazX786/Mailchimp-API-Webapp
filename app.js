// jshint esversion:  6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https'); //to send requests to internet/remote apis we need to use this https lib.


const app = express();


app.use(express.static("public")); // used to link and load the static files like styles, images , icons etc via the express server

app.use(bodyParser.urlencoded({extended:true})); // used to parse the input info received in the form of post request. 




app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html');
});


app.post('/home',(req,res)=>{
    res.redirect("/");
})


app.post('/',(req,res)=>{
    const body=req.body;
    const firstName=body.fName;
    const lastName=body.lName;
    const email=body.email;
    console.log(firstName,lastName,email);

    //creating the data according to the format the mailchimp accepts, read the rules or follow angela yu
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };


    const jsonData=JSON.stringify(data); //making the json object data to a single line using stringify

    //preparing the info according to the parameters of the below  https.request function
    const apikeyid="45def9f93235e2e3c8d2f6a4c41bd3ec-us14";
    const usX="14"; // in above line we have the appid hosted on us server 14;
    const appid="3a8fee02c8";
    const url="https://us"+usX+".api.mailchimp.com/3.0/lists/"+appid;

    const options={
        method:"POST",
        auth:"angela1:"+apikeyid
    }

    // storing the result of the below function in the request variable
    const request = https.request(url, options, (response)=>{
        if(response.statusCode === 200){
            res.sendFile(__dirname+'/success.html');
        }
        else{
            res.sendFile(__dirname+'/failure.html');
        }

        response.on("data",(data)=>{
            console.log(JSON.parse(data));
        })
    });



    request.write(jsonData); //running the jsonData on the request variable created above
    request.end(); //must end the api calls made to external apis to avoid any issues later on.
});








app.listen(3000, ()=>{
    console.log("server started at port 3000 broo!!");
});


///These keys can be found in the mailchimp developer profile under account and settings.
// 45def9f93235e2e3c8d2f6a4c41bd3ec-us14  apikey
// 3a8fee02c8.  appid