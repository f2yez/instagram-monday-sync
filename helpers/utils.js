const axios = require('axios')
const { FIELDS } = require('./../config/constants');
// Send payload to external http
async function sendPayloadToHttp(payload) {
    HTTP_RECIVER && axios.post(HTTP_RECIVER, {
            ...payload
        })
        .catch(error => {
            console.error(error)
        });
}

function getFieldName(columnId) {
    return FIELDS[columnId] ? FIELDS[columnId] : columnId;
}

async function mapFields(item) {
    const columns = item.column_values;
    let values = {};

    values['itemId'] = item.id
    values[getFieldName('name')] = item.name;
    
    if (columns) {
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            const fieldName = getFieldName(column.id);
            values[fieldName] = column.value;
        }
    } 
}

module.exports = {
    sendPayloadToHttp,
    mapFields,
}