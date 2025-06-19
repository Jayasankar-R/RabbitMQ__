const amqp = require('amqplib');

async function sendMail() {
    try {
        const connection =await amqp.connect("amqp://localhost")
        const channel =await connection.createChannel()
        const exchange ="priority_exchange";
        const routingKey="priority_key";

        const queue="priority_queue"
        await channel.assertExchange(exchange,"direct",{durable:true})
        await channel.assertQueue(queue,{
            durable:true,
            arguments:{"x-max-priority":50}
        })
        await channel.bindQueue(queue,exchange,routingKey)

        const data=[
            {
                msg:"hello low:1",
                priority:1
            },
            {
                msg:"hello high:8",
                priority:8
            },
            {
                msg:"hello mid:2",
                priority:2
            }
        ]

        data.map((msg)=>{
            channel.publish(exchange,routingKey,Buffer.from(msg.msg),{priority:msg.priority})
        })
       
        console.log(" All sent message=>>")

        setTimeout(()=>{
            connection.close()
        },500)

    } catch (error) {
        console.log(error)
    }
    
}
sendMail()