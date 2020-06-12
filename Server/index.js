const config = require('config');
require('dotenv').config();
const Joi = require('joi');
const mongoose = require('mongoose');
const register = require('./routes/register');
const login = require('./routes/login');
// const forgotpassword = require('./routes/forgotpassword');
// const resetpassword = require('./routes/resetpassword');
// const uploaddoc = require('./routes/UploadDoc');
const express = require('express');
const app = express();

if(!process.env.PRIVATEKEY){
    console.error('Privatekey is not defined!');
    process.exit(1);
}
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true})
    .then(() => console.log('Now connected to MongoDB database!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/login',login);
app.use('/api/register', register);

// app.use('/api/forgotpassword',forgotpassword);
// app.use('/api/resetpassword',resetpassword);
// app.use('/api/uploaddoc',uploaddoc);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));