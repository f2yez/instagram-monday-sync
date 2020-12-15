
var adaptorController = require('../../controllers/adaptorController');
var express = require('express');
var router = express.Router();

router.post('/provision', adaptorController.provision);
router.use('/schemas', require('./schemas/index'));
router.use('/data', require('./adaptor/data'));

module.exports = router;
