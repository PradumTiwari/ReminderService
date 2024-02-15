const nodemailer=require('nodemailer');
// create a transporter object
const {EMAIL_ID,EMAIL_PASSWORD}=require('./serverConfig');
const { mapFinderOptions } = require('sequelize/types/utils');
const sender=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASSWORD
    }
});

module.exports=sender;