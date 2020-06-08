const Joi = require('@hapi/joi');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const config = require('config');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express.Router();

app.post('/', function(req, res, next) {
res.send("Api is working");
})

module.exports = app;

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    console.log("Hey");
 
    return Joi.validate(req, schema);
}
