var hookController = require('../../controllers/hookController.js');
var express = require('express');
var router = express.Router();

router.get('/receiver', hookController.getReceiver);
router.post('/receiver', hookController.receiver);

module.exports = router;
