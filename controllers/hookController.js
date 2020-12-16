const _ = require('lodash');
const { monday } = require('./../helpers/monday');
const wixController = require('./wixController');
const { mapFields, getFieldName, getFieldValue } = require('./../helpers/utils');

// Test endpoint to make sure server online
async function getReceiver (req, res) {
    res.send('Hello Receiver');
    res.end();
}

// Get Item details from monday
async function getItem(itemId) {
    let item = null;
    try {
        const items = await monday.api(`query { items (ids: [${itemId}]) {
            id, name
            column_values {
                id
                title
                value
                additional_info
              }
            group {
                id
                title
            }  
        }}`);
        if  (items && items.data && items.data.items.length > 0) {
            item = items.data.items[0];
        }
    } catch (error) {
        console.log('Error while get element', error.message);
    }
    return item;
}

// Monday Payload Reciever
async function receiver (req, res) {
    const { action } = req.params;
    // Get item id form received payload
    const { payload: { inputFields: { itemId } } }  = req.body;
    console.log('Payload =>', req.body.payload);
    console.log('ItemId =>', itemId);
    console.log('Action =>', action);
    // Get item details
    const item = await getItem(itemId);
    console.log('Item =>', item);
    // Invoke action based on callback action into params
    switch (action) {
        case 'newItem':
            // Match values from monday item payload with wix columns
            const fields = await mapFields(item);
            // Invoke add new item wix api
            wixController.addNew(fields);
            break;
        case 'columnUpdated':
            // Match values from monday item payload with wix columns
            const updateFields = await mapFields(item);
            // Invoke update item wix api
            wixController.updateItem(updateFields);
            break;
        case 'textUpdated':
            // Match values from monday item payload with wix columns
            const textFieldPayload = {
                itemId: `${itemId}`
            }
            const fieldName = await getFieldName('text_updates');
            // Get column value
            textFieldPayload[fieldName] = req.body.payload.inputFields.text;
            // Invoke update item wix api
            wixController.updateItem(textFieldPayload);
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