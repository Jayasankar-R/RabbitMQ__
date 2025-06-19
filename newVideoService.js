const amqp = require('amqplib');

 const newVideo=async  () =>{
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="header_exchange";
        const exchangeType="headers";
       

    
        await channel.assertExchange(exchange,exchangeType,{durable:true})
        const q =await channel.assertQueue("",{exclusive:true})
        console.log("Waiting for video notification")

        await channel.bindQueue(q.queue,exchange,"",{
            "x-match":"all",
            "notification-type":"new_video",
            "content-type":"video"
        })

        

        channel.consume(q.queue,(message)=>{
            if(message!=null){
                const msg=message.content.toString();
                console.log("Received video",msg)
                channel.ack(message)

            }
          },{noAck:false})

 


    } catch (error) {
        console.log(error)
    }
    
}
newVideo();