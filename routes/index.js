var express = require('express');
var router = express.Router();


// My Email routers
router.use('/hook', require('./hook/index'));
router.use('/wix', require('./wix/index'));
router.use('/adaptor', require('./adaptor/index'));
router.use('/schemas', require('./schemas/index'));
router.use('/data', require('./data'));

module.exports = router;
