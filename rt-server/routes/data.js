var express = require('express');
var router = express.Router();

router.get('/get-server-time', function(req, res, next) {
    res.send(new Date().toLocaleString())
});

module.exports = router;
