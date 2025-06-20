const amqp = require('amqplib');

async function setup(message) {
    const connection =await amqp.connect("amqp://localhost")
    const channel =await connection.createChannel()

    const exchangeName="notification_exchange";
    const queueName="lazy_notifications_queue";
    const routingKey="notification.key"
    await channel.assertExchange(exchangeName,"direct",{
                 durable:true,
             })
    await channel.assertQueue(queueName,{
                 durable:true,
                 arguments:{"x-queue-mode":"lazy"}
             })
    await channel.bindQueue(queueName,exchangeName,routingKey)
    channel.publish(exchangeName,routingKey,Buffer.from(message),{
        persistent:true
    })
    console.log("message sent")
    await channel.close()
    await connection.close()


    
}
setup("Hello guys")









// async function sendToDelayedQueue(batchId,orders,delay) {
//     const connection =await amqp.connect("amqp://localhost")
//     const channel =await connection.createChannel()

//     const exchange ="delayed_exchange";
//     await channel.assertExchange(exchange,"x-delayed-message",{
//         arguments:{"x-delayed-type":"direct"}
//     })
    

//     const queue="delayed_order_updates_queue"
//     await channel.assertQueue(queue,{
//         durable:true,
//     })
//     await channel.bindQueue(queue,exchange,"")

//     const message=JSON.stringify({batchId,orders})
//     channel.publish(exchange,"",Buffer.from(message),{
//         headers:{"x-delay":delay}
//     })
//     console.log(`Sent batch ${batchId} update task to delayed queue`)
// }
// async function processBatchOrders() {
//     const batchId =generateBatchId();
//     const orders=collectOrdersForBatch();

//     console.log(`Processng batch ${batchId} with orders : ${JSON.stringify(orders)}`)

//     await processOrders(orders);

//     const delay =10000;
//     sendToDelayedQueue(batchId,orders,delay);

// }
// async function processOrders(orders) {
//     console.log("🛠️ Processing orders:", orders);
//     return new Promise(resolve => setTimeout(resolve, 1000));
// }

// function generateBatchId(){
//     return "batch-"+Date.now();
// }

// function collectOrdersForBatch(){
//     return [
//         {orderId:1,item:"Laptop",quantity:2},
//         {orderId:2,item:"Mobile",quantity:3}
//     ]
// }
// processBatchOrders()