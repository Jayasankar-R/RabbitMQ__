# 🐇 RabbitMQ with AMQP — Learning Journey

This repository contains hands-on learning of RabbitMQ using the **AMQP 0-9-1** protocol.

---

## 📦 Tech Stack

- RabbitMQ via Docker
- AMQP protocol (`amqplib`, `pika`, or Spring AMQP)
- Language: Node.js / Python / Java

---

## ✅ Concepts Covered

| ✅ Topic                 | Description |
|-------------------------|-------------|
| Producer/Consumer       | Basic message flow |
| Direct exchange         | Routes by exact routing key |
| Topic exchange          | Wildcard-based routing |
| Fanout exchange         | Broadcasts to all queues |
| Headers exchange        | Routes by headers (not routing keys) |
| Priority queues 🆕      | Processes high-priority messages first |

---

## 🧪 Priority Queues

### ✅ What is it?

Priority queues allow RabbitMQ to **process high-priority messages first**, even if they were published later.

### 🔧 How to Enable:

1. Declare the queue with `x-max-priority`:

```js
channel.assertQueue("priority_queue", {
  durable: true,
  arguments: {
    "x-max-priority": 10 // Max priority value
  }
});
