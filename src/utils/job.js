const cron=require('node-cron');
const emailService=require('../services/email-service')

/**
 * 10.00 AM
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent
 * by now and pending
 */




const setupJobs=()=>{
    cron.schedule('*/2 * * * *',async()=>{
      const response=await emailService.fetchPendingEmails(); 
     console.log(response)
    });
}

module.exports=setupJobs;