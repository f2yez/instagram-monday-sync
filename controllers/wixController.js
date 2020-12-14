const axios = require('axios')
const { WIX_NEW_ITEM, WIX_UPDATE_ITEM, WIX_UPLOAD_FILE } = require('./../config/constants');

async function webhookCallback (req, res) {
    console.log('got webhook event from Wix!', req.body);
    res.send(req.body);
}

async function addNew(payload) {
    axios.post(
        WIX_NEW_ITEM, {
        payload
    }).then(res => {
        console.log('res', res.data);
    })
    .catch(error => {
        console.error('error:', error);
    });
}

async function updateItem(payload) {
    axios.put(
        WIX_UPDATE_ITEM, {
        payload
    }).then(res => {
        console.log('res', res.data);
    })
    .catch(error => {
        console.error('error:', error);
    });
}

async function uploadFile(file_url) {
    try {
        const results = await axios.post(
            WIX_UPLOAD_FILE,
            {
                file_url
            }
        );
        console.log('results,', results);
        return results.uploaded.fileUrl;
    } catch (error) {
        console.log('error', error.message);
    }
}

module.exports = {
    webhookCallback,
    addNew,
    updateItem,
    uploadFile
}