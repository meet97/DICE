const Joi = require('joi');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../Models/Users');
const express = require('express');
const router = express.Router();
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}));

router.post('/',async (req,res) =>{

    const { error } = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message);
    }


    let user = await User.findOne({email: req.body.email});
    if(!user) {

        return res.redirect('/signIn');
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.redirect('/signIn');
    }

    else
    {
        const validRole = (user.role);
        if(validRole==="admin"){

            app.use(session({resave: true, saveUninitialized: true, secret: process.env["PRIVATEKEY"], cookie: { maxAge: 60000 }}));

            return res.redirect("/Admin");
        }
        else  {
            if(user.__v === 0)
                return res.redirect("/PasswordChange");
            else
                return res.redirect("/Research");
        }

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
