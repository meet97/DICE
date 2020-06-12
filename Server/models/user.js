
const mongoose = require('mongoose');
const joi = require('joi');

const User = mongoose.model('user', new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNo : {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    }
}));
 
function validateUser(user) {
    const schema = {
        fname: joi.string().min(5).max(255).required(),
        lname: joi.string().min(1).max(255).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required(),
        mobileNo: joi.string().length(10).required(),
        role: joi.string().required()
    };
    return joi.validate(user, schema);
}
 
exports.User = User;
exports.validate = validateUser;