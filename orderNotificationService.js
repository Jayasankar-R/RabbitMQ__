const amqp = require('amqplib');

 const recvMessage=async  () =>{
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="notification_exchange";
        const queue="order_queue";

    
        await channel.assertExchange(exchange,"topic",{durable:true})
        await channel.assertQueue(queue,{durable:true})
        

        await channel.bindQueue(queue,exchange,"order.*")

        console.log("waiting messages")

        channel.consume(queue,(message)=>{
            if(message!=null){
                console.log(`[Order Notification] message consumed with routingKey ${message.fields.routingKey} and content as ${message.content.toString}`)
                channel.ack(message)

            }
          },{noAck:false})

 


    } catch (error) {
        console.log(error)
    }
    
}
recvMessage();
