const config = require('./config');
import consumerBuilder from './src/message-consumer';

let consumer = consumerBuilder(config.kafka_consumer_mode);

let i = 0;
async function main() {
    while (true) {
        const chunk = consumer.read(1024);
        if (!chunk) {
            console.log('Sleep for 5 second \n');
            await sleep(5 * 1000);
            continue;
        } else {
            i += 1;
            let chatlog = JSON.parse(chunk.value);
            console.log(util.inspect(JSON.stringify(chatlog)));
            console.log(i);
        }
    }
}
main();

// consumer.on('message', async function (message) {
//   console.log(`[${new Date(Date.now()).toLocaleString()}] Message consumed: ${message.value}`);
// })
// consumer.on('error', function (err) {
//   console.log(`[${new Date(Date.now()).toLocaleString()}] ERROR consuming message: ${err}`);
// });





// const { MongoClient } = require('mongodb');

// const client = new MongoClient(config.mongo_server);

// try {
//     await client.connect();
// } catch (e) {
//     console.error(e);
// } finally {
//     await client.close();
// }