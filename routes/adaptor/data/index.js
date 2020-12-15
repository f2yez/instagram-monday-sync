
var dataController = require('../../../controllers/dataController');
var express = require('express');
var router = express.Router();

router.post('/insert', dataController.insert);
router.post('/get', dataController.get);
router.post('/find', dataController.find);
router.post('/update', dataController.get);
router.post('/remove', dataController.get);
router.post('/count', dataController.get);

module.exports = router;
