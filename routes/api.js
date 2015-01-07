/**
 * Created by linus on 07/01/15.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    if (req.query.q == 'Viktor' || req.query.q == 'viktor' || req.query.q == 'Larsson' || req.query.q == 'larsson'
        || req.query.q == 'Viktor Larsson' || req.query.q == 'viktor larsson' || req.query.q == 'Viktor larsson'
        || req.query.q == 'viktor Larsson') {
        res.status(200).json({name: 'Viktor Larsson', gender: 'unsertain', status: "Not Awesome"});
    } else {
        res.status(200).json({name: 'Linus Wågberg', gender: 'Manly man', status: "Awesome as hell"});
    }
    ;
});

module.exports = router;