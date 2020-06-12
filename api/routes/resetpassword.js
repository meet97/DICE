
const config = require('config');
require('dotenv').config();
const _ = require('lodash');
const {User} = require("../Models/Users");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.post('/', async(req,res) => {


    const oldpassword = req.body.password;

    const NewPassword = req.body.newpassword;

    const user = await User.find();

    while(user)
    {
        const validPassword =  bcrypt.compare(oldpassword, user.password);

        if(validPassword){
            const id = user.email;
            console.log(id);
           User.findOneAndUpdate({email: id},{password: NewPassword});
        }

        else
            res.send('not found');

    }

    if(!user) {

        return res.redirect('/PasswordChange');
    }

   res.send(user.email);
});

module.exports = router;