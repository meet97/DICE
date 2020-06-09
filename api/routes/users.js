const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config();
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User,validate} = require('../Models/Users');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', async (req, res) => {

  console.log(req.body);
  // Validate The Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('That user already exisits!');
  }
  else {
    // Insert the new user if they do not exist yet
    user = new User(_.pick(req.body,['fname','lname','email','password','mobileNo','role'])
    );
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    await user.save();
    const token = jwt.sign({_id:user._id},process.env.PRIVATEKEY);
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'fname','lname','email','password','mobileNo','role']));

  }
});

module.exports = router;
