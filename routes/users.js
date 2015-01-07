var express = require('express');
var faker = require('../node_modules/faker');
var router = express.Router();

function User(name, email, phone, avatar) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
};

/* GET users listing. */
router.get('/', function (req, res) {
    var users = [];
    for (i = 0; i < 200; i++) {
        users.push(new User(faker.name.firstName() + ' ' + faker.name.lastName(), faker.internet.email(),
            faker.phone.phoneNumber(), faker.image.avatar()));
    }
    ;
    res.render('users', {users: users});
});

module.exports = router;
