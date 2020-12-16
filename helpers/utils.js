const { FIELDS } = require('./../config/constants');
const { monday } = require('./../helpers/monday');
const { uploadFile } = require('./../controllers/wixController');
const { getMimeType } = require('./mime');

// Get assets file from monday and upload it to  media manager into wix
async function getFile(assetsId) {
    let url = null;
    try {
        const items = await monday.api(`query { assets (ids: [${assetsId}]) {
            name
            public_url
            file_extension
        }}`);
        if  (items && items.data && items.data.assets.length > 0) {
            const { name, public_url, file_extension } = items.data.assets[0];
            // Get mime type and media type to prepare file for wix uploading process
            const mimeType = getMimeType(file_extension);
            const mediaType = mimeType.split('/')[0] == 'image' ? 'image' : 'document' ;
            // Upload file to wix
            url = public_url ? await uploadFile({
                file_url: public_url,
                name,
                mimeType,
                mediaType
            }) : null;
        }
    } catch (error) {
        console.log('Error while get element', error.message);
    }
    return url;
}

// Get wix column name based on monday field id
function getFieldName(columnId) {
    return FIELDS[columnId] ? FIELDS[columnId] : columnId;
}

// Get field value and handle many column types
async function getFieldValue(column) {
    if (column.value == null) return null; 
    let value = '';
    try {
        const jsonObj = JSON.parse(column.value);
        // Handle files
        if (jsonObj.files) {
            let files_urls = [];
            const files = jsonObj.files;
            if (files) {
                for (let index = 0; index < files.length; index++) {
                    const file = files[index];
                    // Get file public url
                    const file_url = await getFile(file.assetId);
                    // files_urls.push(file_url);
                    files_urls = file_url;
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

// Map all item column  and get values based on wix column names
async function mapFields(item) {
    const columns = item.column_values;
    let values = {};

    values['itemId'] = item.id
    values[getFieldName('name')] = item.name;
    
    if (columns) {
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            // Get wix column name
            const fieldName = await getFieldName(column.id);
            // Get column value
            values[fieldName] = await getFieldValue(column);
        }
    } 
    return values;
}

module.exports = {
    mapFields,
    getFieldName,
    getFieldValue,
    getFile,
}