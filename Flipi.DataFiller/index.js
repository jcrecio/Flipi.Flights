const kafka = require('kafka-node');
const config = require('./config');

try {
  var kafkaClientOptions = {
    clientId: 'kafkafiller',
    kafkaHost : config.kafka_server,//,broker2:9092,broker3:9092',
    autoConnect: true,
    connectTimeout: 5000,
    requestTimeout: 5000
  };
  
  const client = new kafka.KafkaClient(kafkaClientOptions);
  let consumer = new kafka.Consumer(
    client,
    [
      {
        topic: kafka_server.kafka_topic
      }
    ],
    {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.on('message', async function (message) {
    console.log('kafka-> ', message.value);
  })
  consumer.on('error', function (err) {
    console.log('error', err);
  });
}
catch (e) {
  console.log(e);
}