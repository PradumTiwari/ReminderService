const express=require('express');
const  bodyParser = require('body-parser');
const {PORT}=require('./config/serverConfig')
const {sendBasicEmail}=require('./services/email-service')

const setupAndStartServer=()=>{
    const app=express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    sendBasicEmail("DemoSender@gmail.com","DemoReciever@gmail.com","The Emails Can Be valid as well as Invalid","This Email is created By nodemailer when configure with transport object")
   });
}

setupAndStartServer();