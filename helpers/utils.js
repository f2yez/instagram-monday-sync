const axios = require('axios')

// Send payload to external http
async function sendPayloadToHttp(payload) {
    HTTP_RECIVER && axios.post(HTTP_RECIVER, {
            ...payload
        })
        .catch(error => {
            console.error(error)
        });
}

module.exports = {
    sendPayloadToHttp,
}