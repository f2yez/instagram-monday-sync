const _ = require('lodash');
const { monday } = require('./../helpers/monday');
const wixController = require('./wixController');
const { mapFields, getFieldName } = require('./../helpers/utils');

async function getReceiver (req, res) {
    console.log('receiverreceiverreceiver');
    res.send('Hello Webhook');
    res.end();
}


async function getItem(itemId) {
    let item = null;
    try {
        const items = await monday.api(`query { items (ids: [${itemId}]) {
            id, name, status
            column_values {
                id
                title
                value,
                type,
                text,
                additional_info
              }
        }}`);
        console.log('items', items);
        if  (items && items.data && items.data.items.length > 0) {
            item = items.data.items[0]; // column_values structure is [{id, title, value}]
        }
    } catch (error) {
        console.log('Error while get element', error.message);
    }
    return item;
}


async function receiver (req, res) {
    const { action } = req.params;
    const { payload: { inputFields: { itemId, columnId, columnValue } } }  = req.body;
    console.log('Payload =>', req.body.payload);
    console.log('ItemId =>', itemId);
    console.log('Action =>', action);
    const item = await getItem(itemId);
    console.log('Item =>', item);

    switch (action) {
        case 'newItem':
            const fields = await mapFields(item);
            wixController.addNew(fields);
            break;
        case 'columnUpdated':
            let updatePayload = {
                itemId: itemId,
            };
            // const field = getFieldName(columnId);
            // updatePayload[field] = columnValue.date || columnValue.index;
            // wixController.updateItem(updatePayload);
            break;
        default:
            break;
    }
    res.end();
}

module.exports = {
    getReceiver,
    receiver,
}