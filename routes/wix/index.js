var wixController = require('../../controllers/wixController');
var express = require('express');
var router = express.Router();

router.post('/webhook-callback', wixController.webhookCallback);

module.exports = router;
