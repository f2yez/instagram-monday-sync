var express = require('express');
var router = express.Router();


// My Email routers
router.use('/hook', require('./hook/index'));

module.exports = router;
