# Mailchimp-Newsletter-API-using-express

This is a project which uses the Mailchimp API to make a NEWS LETTER webapp where you just signup for the newsletter using your details like firstname ,lastname and email address.

## Landing page

![Landing page Screenshot](./public/assets/Readme%20screenshots/Landing.png)

Whenever we enter the details in the signup form and submit the details then a post request is called and express handles the post request using node post function written in the app.js file.

![Data Entry Screenshot](./public/assets/Readme%20screenshots/Data.png)


when the status code is 200 i.e., whenever the server was able to post the data to Mailchimp API then it returns the 200 ok status. and when 200 status is returned then express returns success.html file.

![Status ok Screenshot](./public/assets/Readme%20screenshots/Success.png)

And if the status is anything other than 200 then it will return failure.html file.
![Status Not ok/ Error Screenshot](./public/assets/Readme%20screenshots/Error.png)


#### Note:
Also the API uses the appid and apikey which is turned down for security reasons and you can see the deployed 
version on the given deployed link (here)[https://shrouded-hamlet-34168.herokuapp.com/].
