# Mailchimp-Newsletter-API-using-express

This is a project which uses the Mailchimp API to make a NEWS LETTER webapp where you just signup for the newsletter using your details like firstname ,lastname and email address.

## 1. Landing page

![Landing page Screenshot](./public/assets/Readme%20screenshots/Landing.png)

## 2. Filling up the form

Whenever we enter the details in the signup form and submit the details then a post request is called and express handles the post request using node post function written in the app.js file.

![Data Entry Screenshot](./public/assets/Readme%20screenshots/Data.png)


## 3. Successfully Signed Up

when the status code is 200 i.e., whenever the server was able to post the data to Mailchimp API then it returns the 200 ok status. and when 200 status is returned then express returns success.html file.

![Status ok Screenshot](./public/assets/Readme%20screenshots/Success.png)


## 4. OOps! some error occured

And if the status is anything other than 200 then it will return failure.html file.

![Status Not ok/ Error Screenshot](./public/assets/Readme%20screenshots/Error.png)

## 5. Mailchimp API Dashboard

The record/subscriber gets added on top of the list as highlighted in the image below.

![Mailchimp Dashboard Screenshot](./public/assets/Readme%20screenshots/Mailchimp.png)



#### Note:
> Also the API uses the appid and apikey which is turned down for security reasons and you can see the deployed 
version on the given deployed link [here](https://shrouded-hamlet-34168.herokuapp.com/).
- However you are free to give it a star, clone it, run it on your local pc.
- As the API key is turned off this will work on your local pc flawlessly with some changes in app.js unless the dependencies are not depreciated.
