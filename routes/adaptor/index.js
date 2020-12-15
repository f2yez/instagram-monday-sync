
var adaptorController = require('../../controllers/adaptorController');
var express = require('express');
var router = express.Router();

router.post('/provision', adaptorController.provision);

module.exports = router;
