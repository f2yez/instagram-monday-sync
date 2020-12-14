const jwt = require('jsonwebtoken');

async function webhookCallback (req, res) {
    console.log('got webhook event from Wix!', req.body);
    res.send(req.body);
}

async function addNew(payload) {
    axios.post(
        'https://fayez00.wixsite.com/website/_functions/create/', {
        payload
    }).catch(error => {
        console.error('error:', error);
    });
}

module.exports = {
    webhookCallback,
    addNew
}