const axios = require('axios')
const { FIELDS } = require('./../config/constants');
const { monday } = require('./../helpers/monday');

// Send payload to external http
async function sendPayloadToHttp(payload) {
    HTTP_RECIVER && axios.post(HTTP_RECIVER, {
            ...payload
        })
        .catch(error => {
            console.error(error)
        });
}

async function getFile(assetsId) {
    let item = null;
    try {
        const items = await monday.api(`query { assets (ids: [${assetsId}]) {
            public_url
        }}`);
        if  (items && items.data && items.data.assets.length > 0) {
            item = items.data.assets[0].public_url; // column_values structure is [{id, title, value}]
        }
    } catch (error) {
        console.log('Error while get element', error.message);
    }
    return item;
}

function getFieldName(columnId) {
    return FIELDS[columnId] ? FIELDS[columnId] : columnId;
}

async function getFieldValue(column) {
    if (column.value == null) return null; 
    let value = '';
    try {
        const jsonObj = JSON.parse(column.value);
        // Handle files
        if (jsonObj.files) {
            let files_urls = [];
            const files = jsonObj.files;
            console.log('files', files);
            if (files) {
                for (let index = 0; index < files.length; index++) {
                    const file = files[index];
                    // Get file public url
                    const file_url = await getFile(file.assetId);
                    files_urls.push(file_url);
                }
            }
            value = files_urls;
        // Handle status    
        } else if (jsonObj.index) {
            const additional_info = JSON.parse(column.additional_info);
            value = additional_info.label;
        // Handle status
        } else if (jsonObj.date) {
            value = jsonObj.date;
        } else {
            value = jsonObj;
        }
    } catch (error) {
        console.log('String is not json');
        value = column.value.replace("'", '');
    }
    return value;
}

async function mapFields(item) {
    const columns = item.column_values;
    let values = {};

    values['itemId'] = item.id
    values[getFieldName('name')] = item.name;
    
    if (columns) {
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            const fieldName = await getFieldName(column.id);
            console.log('column.id', column.id);
            values[fieldName] = await getFieldValue(column);
        }
    } 
    return values;
}

module.exports = {
    sendPayloadToHttp,
    mapFields,
    getFieldName,
    getFieldValue,
    getFile,
}