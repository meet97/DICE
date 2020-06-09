const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
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
        type: String

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
        fname: Joi.string().min(5).max(255).required(),
        lname: Joi.string().min(1).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().max(255),
        mobileNo: Joi.string().length(10).required(),
        role: Joi.string().required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;