
const config = require('config');
require('dotenv').config();
const _ = require('lodash');
const {User} = require("../Models/Users");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {

    if(req.header){
        var token = req.params.token;
        jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
        if (err) {
            return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
            req.decoded = decoded;

        }
    });
   }    console.log(User.password)  
      let user = await  User.findOne({_id : req.decoded._id})
      if(user){
         user.password = req.body.NewPassword;

          user.save(function(err,doc){
            if(err){
               res.send('not updated')
            }
            else{

                res.send('updated successfully')
            }
         });
      }
});
module.exports = router;