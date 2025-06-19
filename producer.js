const amqp = require('amqplib');

async function sendMail() {
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="mail_exchange";
        const routingKeyForSub="send_mail_to_sub_user";
        const routingKeyForNormal="send_mail_to_user";
        const message={
            to:"jayaaaokkk@gmail.com",
            from:"jaaa2@gmail.com",
            subject:"Hello Learn okkkkk",
            body:"hi how are u"
        }
        await channel.assertExchange(exchange,"direct",{durable:false})
        await channel.assertQueue("mail_queue_to_subscribe",{durable:false})
        await channel.assertQueue("mail_queue_to_user",{durable:false})

        await channel.bindQueue("mail_queue_to_subscribe",exchange,routingKeyForSub)
        await channel.bindQueue("mail_queue_to_user",exchange,routingKeyForNormal)
        channel.publish(exchange,routingKeyForSub,Buffer.from(JSON.stringify(message)))
        console.log("message sent",message)

        setTimeout(()=>{
            connection.close()
        },500)

    } catch (error) {
        console.log(error)
    }
    
}
sendMail()