const amqp = require('amqplib');

 const sendMessage=async function sendMail(headers,message) {
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="header_exchange";
        const exchangeType="headers";

        
        await channel.assertExchange(exchange,exchangeType,{durable:true})
        
        
        channel.publish(exchange,"",Buffer.from(message),{
            persistent:true,
            headers:headers
        })
        console.log("Sent notification with headers =>>",message)

        setTimeout(()=>{
            connection.close()
        },500)

    } catch (error) {
        console.log(error)
    }
    
}
sendMessage({"x-match":"all","notification-type":"new_video","content-type":"video"},"New video uploaded")
sendMessage({"x-match":"all","notification-type":"live_stream","content-type":"gaming"},"gaming live started ")
sendMessage({"x-match":"any","notification-type-comment":"comment","content-type":"vlog"},"New comment uploaded")
sendMessage({"x-match":"any","notification-type-like":"like","content-type":"vlog"},"New like uploaded")