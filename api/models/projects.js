const Joi = require('joi');
const mongoose = require('mongoose');

const Project = mongoose.model('project', new mongoose.Schema({
    project_id: {
        type: String

    },
    project_name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        maxlength: 512
    },
    document_id:{
        type: Array,

    }

}));

function validateUser(user) {
    const schema = {
        project_id: Joi.string().required(),
        project_name: Joi.string().min(1).max(255).required(),
        desc: Joi.string().min(5).max(512).required().email(),
        document_id: Joi.string()

    };
    return Joi.validate(Project, schema);
}

exports.project = Project;
exports.validate = validateUser;