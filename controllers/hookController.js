const _ = require('lodash');

async function receiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}

module.exports = {
    receiver,
}