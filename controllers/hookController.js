const _ = require('lodash');
const { monday } = require('./../helpers/monday');

async function getReceiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}


async function getItem(itemId) {
    monday.api(`query { items (ids: [${itemId}]) {
        id, name,
        column_values {
            id
            title
            value
          }
    }}`).then(res => {
        console.log(res);
    });
}


async function receiver (req, res) {
    const { action } = req.params;
    const { payload: { inputFields: { itemId } } }  = req.body;
    console.log('ItemId =>', itemId);
    console.log('Action =>', action);
    const item = await getItem(itemId);
    console.log('Item =>', item);

    res.end();
}

module.exports = {
    getReceiver,
    receiver,
}