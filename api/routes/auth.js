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

router.post('/',async (req,res) =>{

    const { error } = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }


    console.log(req.body.email + " ");
    let user = await User.findOne({email: req.body.email});
    if(!user) {
        console.log(user);
        return res.status(400).send("Incorrect Email!");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send("Incorrect password!");
    }

    const token = jwt.sign({_id : user._id},process.env.PRIVATEKEY);
    res.send(token);


});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}


module.exports = router;
