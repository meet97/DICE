const config = require('config');
require('dotenv').config();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/Users');
const resetpassword = require('./routes/resetpassword');
const uploaddoc = require('./routes/UploadDoc');
const cors= require('cors');
const express = require('express');
const app = express();



if(!process.env["PRIVATEKEY"]){
  console.error('Privatekey is not defined!');
  process.exit(1);
}
mongoose.connect(process.env["DB_CONNECTION"])
    .then(() => console.log('Now connected to MongoDB database!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/forgotpassword',require('./routes/forgotpassword'));
app.use('/api/resetpassword',resetpassword);
app.use('/api/uploaddoc',uploaddoc);

const port = 4500;
app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.listen(port, () => console.log(`Listening on port ${port}...`));


module.exports = app;
