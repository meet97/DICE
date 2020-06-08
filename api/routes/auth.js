const Joi = require('@hapi/joi');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const config = require('config');
const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/Users');
const app = express.Router();

app.post('/', async (req,res) =>{

    res.send("Auth is working");
    const { error } = validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({email: req.body.email});
    if(!user) {
        return res.status(400).send("Incorrect Email or password!");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send("Incorrect Email or password!");
    }
    const token = jwt.sign({_id : user._id},process.env.PRIVATEKEY);
    res.send(token);


});

module.exports = app;

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    console.log("Hey");
 
    return Joi.validate(req, schema);
}
