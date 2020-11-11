const utils = require('./../helpers/utils');

// Get method to verify instagram webhook into facebook app
// Random token
function verifyInstagramCallback (req, res, next)
{
    // My Verification token same into the 
    let VERIFY_TOKEN = "@1234@56789@@@";
    // Facebook callback request params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    
    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
        } else {
        res.sendStatus(403);      
        }
    }
}

// Here i will recive webhook request
// I will handle it based on event type comments/mentions
async function instagramEvents (req, res, next)
{
    try {
        const { changes } = req.body[0].entry[0];
        const { field, value } = changes[0];
        let slackTextMessage = null;
        // Generate Slack msg based on payload
        if (field == 'comments') {
            slackTextMessage = utils.generateNewCommentMsg(value.text);
        } else if (field == 'mentions') {
            slackTextMessage = utils.generateNewMentionsMsg();
        }
        if (slackTextMessage) {
            utils.sendMsgToSlack(slackTextMessage);
        }
        // End Request
        res.status(200).end();
    } catch (error) {
        // End Request
        console.log(error);
        res.status(200).send("Payload not valid");
    }
}

module.exports = {
    verifyInstagramCallback,
    instagramEvents,
}