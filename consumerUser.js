amqp=require("amqplib");

async function recMail() {
    try {
          const connection =await amqp.connect("amqp://localhost")
          const channel =await connection.createChannel()
          const queue="priority_queue"

          await channel.assertQueue(queue,{
            durable:true,
            arguments:{"x-max-priority":50}
        })
          console.log(`waiting ${queue}.To exit CTRL C`)

          channel.consume(queue,(message)=>{
            if(message!=null){
                console.log(`message received ,${message.content.toString()}`)
                channel.ack(message)

            }
          })

    } catch (error) {
        console.log(error)
    }
    
}
recMail();