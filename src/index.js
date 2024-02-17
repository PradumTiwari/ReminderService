const express=require('express');
const  bodyParser = require('body-parser');
const {PORT}=require('./config/serverConfig')
// const {sendBasicEmail}=require('./services/email-service')
const TicketController=require('./controllers/ticket-controller')
const jobs=require('./utils/job')
 
// const v1ApiRoutes=require('./Routes/index')

const setupAndStartServer=()=>{
    const app=express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
   app.post('/api/v1/tickets',TicketController.create);
   app.listen(PORT,()=>{
    console.log(PORT);
    console.log(`Server is running on port ${PORT}`);
   
    jobs();

    // sendBasicEmail("DemoSender@gmail.com","h94256@gmail.com","The Emails Can Be valid as well as Invalid","This Email is created By nodemailer when configure with transport object BATA Aur sab Kya HAal")
   });
}

setupAndStartServer();