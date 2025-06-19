const amqp = require('amqplib');

 const recvMessage=async  () =>{
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="new_product_launch";
        const exchangeType="fanout";

    
        await channel.assertExchange(exchange,exchangeType,{durable:true})
       
        
        const queue =await channel.assertQueue("",{exclusive:true})
  

        console.log("waiting messages",queue)

        await channel.bindQueue(queue.queue,exchange,"")

        channel.consume(queue.queue,(message)=>{
            if(message!=null){
                const product = JSON.parse(message.content.toString());
                console.log("Sending message for sms",product.name)
                channel.ack(message)

            }
          },{noAck:false})

 


    } catch (error) {
        console.log(error)
    }
    
}
recvMessage();