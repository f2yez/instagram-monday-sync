
var schemasController = require('../../controllers/schemasController');
var express = require('express');
var router = express.Router();

router.post('/find', schemasController.find);
router.post('/list', schemasController.list);

module.exports = router;
