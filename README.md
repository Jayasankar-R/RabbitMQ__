# 🐇 RabbitMQ with AMQP — Learning Journey

This repository documents my hands-on learning with **RabbitMQ** using the **AMQP 0-9-1 protocol**. I'm exploring how producers, exchanges, queues, and consumers interact using various exchange types.

---

## 📦 Technologies Used

- RabbitMQ (via Docker)
- AMQP protocol
- Language: (insert: Node.js / Python / Java / etc.)
- Client library: (e.g., `amqplib`, `pika`, Spring AMQP)

---

## 📚 Concepts Covered

| Concept    | Description |
|------------|-------------|
| **Producer** | Sends messages to an exchange |
| **Exchange** | Routes messages to queues |
| **Queue**    | Stores messages |
| **Binding**  | Connects queue to exchange |
| **Consumer** | Consumes messages from queues |
| **Routing**  | Routing logic varies by exchange type |

---

## 🔁 Exchange Types Covered

| Exchange Type | Description |
|---------------|-------------|
| `direct`      | Routes by exact routing key match |
| `topic`       | Pattern-based routing using wildcards |
| `fanout`      | Broadcasts to **all bound queues**, ignores routing keys |
| `headers`     | Routes based on **header key-value matching**, **not routing keys** |

---

## 🛠️ RabbitMQ Setup (Docker)

```bash
docker run -d --hostname rabbit-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:management
