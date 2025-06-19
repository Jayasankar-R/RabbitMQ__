# 🐇 RabbitMQ with AMQP — Learning Journey

This repository documents my learning of **RabbitMQ** using the **AMQP protocol (0-9-1)**. I'm exploring how producers, exchanges, queues, and consumers work together using **direct** and **topic** exchange types.

---

## 📦 Technologies Used

- **RabbitMQ** (via Docker)
- **AMQP protocol** (Advanced Message Queuing Protocol)
- AMQP client libraries:
  - (Insert here: `amqplib` for Node.js, `pika` for Python, etc.)

---

## 📚 Concepts Covered

### ✅ AMQP Core Elements:
- 📨 **Producer** sends a message via AMQP
- 🛤️ **Exchange** routes messages to queues
- 📦 **Queue** stores messages
- 📬 **Consumer** pulls messages from queues
- 📎 **Binding** links queues to exchanges with routing keys

---

## 🔁 Exchange Types Learned

| Exchange Type | Description |
|---------------|-------------|
| `direct`      | Routes based on **exact match** routing key |
| `topic`       | Routes based on **wildcard pattern** matching |

---

## 🛠️ Setup (RabbitMQ via Docker)

```bash
docker run -d --hostname rabbit-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:management
