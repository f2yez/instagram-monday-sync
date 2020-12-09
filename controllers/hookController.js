const _ = require('lodash');

async function getReceiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}


async function receiver (req, res) {
    console.log('req.body', req.body);
    res.send('Hello Webhook');
    res.end();
}

module.exports = {
    getReceiver,
    receiver,
}