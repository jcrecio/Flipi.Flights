const kafka = require('kafka-node');
const config = require('./config');

const consumer_modes = {
    consumer_individual: kafka.Consumer,
    consumer_group: kafka.ConsumerGroup,
    consumer_group_stream: kafka.ConsumerGroupStream
}

function consumerBuilder(consumerMode) {
    try {
        const kafkaClientOptions = {
            clientId: 'kafkafiller',
            kafkaHost: config.kafka_server,//,broker2:9092,broker3:9092',
            autoConnect: true,
            connectTimeout: 5000,
            requestTimeout: 5000
        };

        const client = new kafka.KafkaClient(kafkaClientOptions);

        const consumerMode = consumer_modes[consumerMode];
        return new consumerMode(
            client,
            [
                { topic: kafka_server.kafka_topic }
            ],
            {
                autoCommit: true,
                fetchMaxWaitMs: 1000,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8',
                // fromOffset: false
                // kafkaHost: config.KafkaHost,
                groupId: 'GroupKafkaId1',
                fetchMaxWaitMs: 1000,
                // fetchMaxBytes: 1024,
                sessionTimeout: 15000,
                protocol: ['roundrobin'],
                asyncPush: false,
                id: 'consumer1',
                autoCommit: true,
                fromOffset: 'latest'
            }
        );
    }
    catch (e) {
        console.log(e);
        return undefined;
    }
}

export default consumerBuilder;