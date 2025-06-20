FROM rabbitmq:management
COPY ./rabbitmq_delayed_message_exchange-4.1.0.ez /plugins/
RUN rabbitmq-plugins enable rabbitmq_delayed_message_exchange