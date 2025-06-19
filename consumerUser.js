amqp=require("amqplib");

async function recMail() {
    try {
          const connection =await amqp.connect("amqp://localhost")
          const channel =await connection.createChannel()
          await channel.assertQueue("mail_queue_to_user",{durable:false})

          channel.consume("mail_queue_to_user",(message)=>{
            if(message!=null){
                console.log("message received for user",JSON.parse(message.content))
                channel.ack(message)

            }
          })

    } catch (error) {
        console.log(error)
    }
    
}
recMail();