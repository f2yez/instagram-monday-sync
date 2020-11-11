var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).send("Welcome, Routers working fine");
});
// Privacy Route for facebook app
router.get("/hook/privacy", (req, res) => {
    res.status(200).send("our privacy is");
});
// Terms Route for facebook app
router.get("/hook/terms", (req, res) => {
    res.status(200).send("our terms is");
});
// Route to verify letsEncrypt because i need to deploy my app into a host,
// so i need ssl domain to us it into facebook app callback
router.get('/.well-known/acme-challenge/:content', function(req, res) {
    res.send('B1D8bWWbumawWby366dwWZNf2xsGFFXHkOQmJtmlems.zI34ZmE3-wn92V07wM69mGkXlRuNAYbfNACxkDMhdPA')
});

// My Hook routers
router.use('/hook', require('./hook/index'));

module.exports = router;
