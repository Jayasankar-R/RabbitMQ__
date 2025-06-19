const amqp = require('amqplib');

 const sendMessage=async function sendMail(routingKey,message) {
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="notification_exchange";
        const exchangeType="topic";

        // const routingKeyForSub="send_mail_to_sub_user";
        // const routingKeyForNormal="send_mail_to_user";
        // const message={
        //     to:"jayaaaokkk@gmail.com",
        //     from:"jaaa2@gmail.com",
        //     subject:"Hello Learn okkkkk",
        //     body:"hi how are u"
        // }
        await channel.assertExchange(exchange,exchangeType,{durable:true})
        // await channel.assertQueue("mail_queue_to_subscribe",{durable:false})
        // await channel.assertQueue("mail_queue_to_user",{durable:false})

        // await channel.bindQueue("mail_queue_to_subscribe",exchange,routingKeyForSub)
        // await channel.bindQueue("mail_queue_to_user",exchange,routingKeyForNormal)
        channel.publish(exchange,routingKey,Buffer.from(JSON.stringify(message)))
        console.log("[x] Sent '%s' :'%s'",routingKey,JSON.stringify(message))
        console.log(`Message send with routingkey as ${routingKey} and content as ${message}`)

        setTimeout(()=>{
            connection.close()
        },500)

    } catch (error) {
        console.log(error)
    }
    
}
sendMessage("order.placed",{orderId:123,status:"placed"})
sendMessage("payment.processed",{paymentId:456,status:"processed"})