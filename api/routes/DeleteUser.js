const Joi = require('joi');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const {User} = require('../Models/Users');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({extended: true}));
router.get('/',async (req, res)=> {

    var email = req.query.email;
    console.log(email);
    let harman = await User.find({email: email})
    console.log(harman);
    res.send(harman);
});


module.exports = router;