/**
 * Created by linus on 07/01/15.
 */

var express = require('express');
var router = express.Router();
var faker = require('../node_modules/faker');

router.get('/', function (req, res) {
    res.status(200).json({message:{text:faker.lorem.paragraph(),id:faker.internet.password()}})
});

module.exports = router;