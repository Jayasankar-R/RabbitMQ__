# 🐇 RabbitMQ with AMQP — Learning Journey

This repository documents my learning of **RabbitMQ** using the **AMQP protocol (0-9-1)**. I'm exploring how producers, exchanges, queues, and consumers work together using:

- ✅ Direct exchange
- ✅ Topic exchange
- ✅ Fanout exchange

---

## 📦 Technologies Used

- RabbitMQ (Docker)
- AMQP protocol (`amqplib`, `pika`, or Spring AMQP)
- Language: (insert: Node.js / Python / Java etc.)

---

## 📚 Concepts Covered

| Concept        | Description |
|----------------|-------------|
| Producer       | Sends message to exchange |
| Exchange       | Routes message to queue(s) |
| Queue          | Stores messages |
| Binding        | Links queue to exchange |
| Consumer       | Receives messages from queues |

---

## 🔁 Exchange Types Learned

| Exchange Type | Description |
|---------------|-------------|
| `direct`      | Exact routing key match |
| `topic`       | Pattern-based routing using wildcards (`*`, `#`) |
| `fanout`      | **Broadcasts** message to **all bound queues**, **ignores routing keys** |

---

## 🛠️ Setup (RabbitMQ via Docker)

```bash
docker run -d --hostname rabbit-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:management
