'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        var error = err || info;
        if (error) return res.status(401).json(error);
        if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});

        var cloneUser = clone(user);
        delete cloneUser.hashedPassword;
        delete cloneUser.salt;
        var token = auth.signToken(user._id, user.role);
        res.json({token: token, user: cloneUser});
    })(req, res, next)
});

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

module.exports = router;
