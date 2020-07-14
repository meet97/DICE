const express = require('express');
const {User} = require('../Models/Users');
const passport = require('passport');
const localStrategy  = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const router = express.Router();


router.post('/',passport.authenticate('passport-local',{
    successRedirect: '/Admin',
    failureRedirect: '/Login'
}) ,function(req,res){

    passport.use('login',new localStrategy(
        function(email, password, done) {
            User.findOne({ email: email }, function(err, user) {
                if (err)
                {
                    return done(err);
                }
                if (!user)
                {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (bcrypt.compare(req.body.password, user.password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                res.redirect('/Admin');
            });
        }
    ));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

});

module.exports = router;