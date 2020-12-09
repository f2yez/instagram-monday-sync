const _ = require('lodash');
const { monday } = require('./../helpers/monday');

async function getReceiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}


async function getItem(itemId) {
    let item = null;
    try {
        const items = await monday.api(`query { items (ids: [${itemId}]) {
            id, name,
            column_values {
                id
                title
                value
              }
        }}`);
        if  (items && items.data && res.data.items.length > 0) {
            item = items.data.items[0]; // column_values structure is [{id, title, value}]
        }
    } catch (error) {
        console.log('Error while get element', error.message);
    }
    return item;
}


async function receiver (req, res) {
    const { action } = req.params;
    const { payload: { inputFields: { itemId } } }  = req.body;
    console.log('Payload =>', req.body.payload);
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