const sender=require('../config/emailConfig');
const TicketRepository=require('../repository/ticket-repository')



const sendBasicEmail=async(mailFrom,mailTo,mailSubject,mailBody)=>{
sender.sendMail({
    from:mailFrom,
    to:mailTo,
    subject:mailSubject,
    text:mailBody
})
}


const ticketRepository=new TicketRepository();


const fetchPendingEmails=async(timestamp)=>{
    try {
        
        const response=await ticketRepository.getAll();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createNotification=async(data)=>{
    try {
        const response=await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
}