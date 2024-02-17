
const TicketService=require('../services/email-service')

const create=async (req,res)=>{
    try {
        const response=await TicketService.createNotification(req.body);
        return res.status(200).json({
            sucess:true,
            data:response,
            err:{},
            message:"Sucessfully Created the Ticket"
        })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            data:[],
            err:error,
            message:"Unable to register an email Reminder"
        })
    }

   
}

module.exports={
 create       
}