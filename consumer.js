const amqp = require('amqplib');

async function processOrderUdpates() {
    const connection =await amqp.connect("amqp://localhost")
    const channel =await connection.createChannel()

    const queue="delayed_order_updates_queue"
    await channel.assertQueue(queue,{
        durable:true,
    })
    channel.consume(queue,async(batch)=>{
        if(batch!=null){
            const {batchId}=JSON.parse(batch.content.toString());
            console.log(`Processing order update for batchId : ${batchId}`)
            await updateOrderStatus(batchId);
            channel.ack(batch)

        }
      },{noAck:false})
}
async function updateOrderStatus(batchId) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Order status updated to "Started Shipping " for batch :${batchId}`)
            resolve();

        },1000)
    })

}

function generateBatchId(){
    return "batch-"+Date.now();
}

function collectOrdersForBatch(){
    return [
        {orderId:1,item:"Laptop",quantity:2},
        {orderId:2,item:"Mobile",quantity:3}
    ]
}
processOrderUdpates()