// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const { generateNewCommentMsg } = require('./helpers/utils');
// Initialize express and define a port
const app = express()
const PORT = process.env.PORT || 3000

// Register Body parser to my app to i can parseing request and response
app.use(bodyParser.json())

// Add Get http method for webhook callback to verify my callback url
app.get("/hook/instagram", (req, res) => {
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
});

app.post("/hook/instagram", (req, res) => {
  const { field, value } = req.body;
  let slackMessage = '';
  if (field == 'comments') {
    slackMessage = generateNewCommentMsg(value.text);
  } else if (field == 'mentions') {

  }
  console.log(slackMessage);
  res.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
