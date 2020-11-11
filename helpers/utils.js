const { SLACK_WEBHOOK } = require("./../config/constants");
const axios = require('axios')

// Generate Comments Slack Message
function generateNewCommentMsg(text) {
    return `Someone comments on one of your photos.\nThe comment body: ${text}`;
}

// Generate Mentions Slack Message
function generateNewMentionsMsg() {
    return "Someone mentions you in a comment";
}

// Send Message to slack channel using webhook
async function sendMsgToSlack(text) {
    axios.post(SLACK_WEBHOOK, {
            text
        })
        .catch(error => {
            // I will do nothing
            console.error(error)
        });
}

module.exports = {
    generateNewCommentMsg,
    generateNewMentionsMsg,
    sendMsgToSlack
}