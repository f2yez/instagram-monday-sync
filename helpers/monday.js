const mondaySdk = require("monday-sdk-js");
const { PERSONAL_API_TOKEN, CLIENT_ID } = require('../config/constants');

const monday = mondaySdk({
    clientId: CLIENT_ID,
    apiToken: PERSONAL_API_TOKEN
});

function setMondayToken() {
    monday.setToken(PERSONAL_API_TOKEN);
}

module.exports = {
    monday,
    setMondayToken
}