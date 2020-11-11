const axios = require('axios')

// Generate Comments Slack Message
function generateNewCommentMsg(text) {
    return "Someone comments on one of your photos";
}

// Generate Mentions Slack Message
function generateNewMentionsMsg() {
    return "Someone mentions you in a comment";
}

function sendMsgToSlack(text) {
    try {
        axios.post('https://hooks.slack.com/services/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', {
            text
        });
    } catch (error) {
        
    }
}

module.exports = {
    generateNewCommentMsg,
    generateNewMentionsMsg,
    sendMsgToSlack
}