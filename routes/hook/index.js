var hookController = require('../../controllers/hookController.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/instagram', hookController.verifyInstagramCallback);
router.post('/instagram', hookController.instagramEvents);

module.exports = router;
