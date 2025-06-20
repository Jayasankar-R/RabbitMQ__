# 🐇 RabbitMQ with AMQP — Learning Journey

This repository contains hands-on learning of RabbitMQ using the **AMQP 0-9-1** protocol and real-world patterns like message routing and delayed processing.

---

## 📦 Tech Stack

- **RabbitMQ** (via Docker)
- **AMQP protocol** (`amqplib` for Node.js, `pika` for Python, Spring AMQP for Java)
- **Language:** Node.js (main), extendable to Python or Java

---

## ✅ Concepts Covered

| ✅ Topic              | Description |
|----------------------|-------------|
| Producer/Consumer    | Basic message flow |
| Direct exchange      | Routes messages by exact routing key |
| Topic exchange       | Routes using wildcard patterns (`*`, `#`) |
| Fanout exchange      | Broadcasts messages to all bound queues |
| Delayed queues 🕒     | Delay message delivery using a plugin-based exchange |
| Lazy queues 🐢        | Stores messages on disk to reduce memory usage |
