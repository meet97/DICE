require('dotenv').config();
const Joi = require('joi');
const mongoose = require('mongoose');

const serv = mongoose.model('services', new mongoose.Schema({
    service_id:{
        type: String,
        required:true
    },
    service_name: {
        type: String,
        required:true
    }
}));

exports.services = serv;