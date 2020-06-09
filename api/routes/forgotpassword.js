
const jwt =require('jsonwebtoken');
require('dotenv').config();
const config = require('config');
const nodemailer = require('nodemailer');
const express = require('express');
const {User} = require("../Models/Users");
const app = express.Router();

app.get('/',async (req,res,next) => {

    res.send("forge is working");

     let user = await User.findOne({email : req.body.email})

     if(!user){
         return res.status(400).send("User not found")
     }
     else{
         const token = jwt.sign({_id : user._id},process.env.PRIVATEKEY);
         const resetLink = "http://"+process.env.HOST+":"+process.env.PORT+"/api/resetpassword?token=" + token

        var transporter = nodemailer.createTransport({
             service : 'gmail',
             auth:{
                 user : process.env.MAIL_USERID,
                 pass : process.env.MAIL_PASSWORD
             }
         });

        var mailoptions = {
             from    : 'process.env.MAIL_USERID',
             to      :  req.body.email ,
             subject : 'Reset password!' ,
             text : 'Please click below link to reset your password! \n' + resetLink
         }

        transporter.sendMail(mailoptions, function(error,info){
        if(error){
            res.send('Not able to send email!')
        }
        else{
            res.send(resetLink);
        }
        });

     }

});

module.exports = app;