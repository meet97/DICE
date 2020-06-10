require('dotenv').config();
const mongoose = require('mongoose');

const proj = mongoose.model('projects', new mongoose.Schema({
    p_id:{
        type: String,
        required:true
    },
    p_name: {
        type: String,
        required:true
    },
    p_desc: {
        type: String,
        required:true
    }
}));

exports.projects = proj;