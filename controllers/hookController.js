const _ = require('lodash');

async function getReceiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}


async function receiver (req, res) {
    const { action } = req.params;
    const { payload: { inputFields: { itemId } } }  = req.body;
    console.log('payload', itemId);
    console.log('action', action);
    res.send('Hello Webhook');
    res.end();
}

module.exports = {
    getReceiver,
    receiver,
}