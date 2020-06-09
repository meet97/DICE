const Joi = require('joi');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../Models/Users');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}));
router.get('/',async (req, res)=> {

    let harman = await User.find()
    console.log(harman);
    res.send(harman);
});


module.exports = router;