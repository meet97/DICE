require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {projects} = require('../models/model_projects');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/',async (req, res)=> {
    let p = await projects.find();
    console.log(p);
    console.log(req.session);
    res.send(p);
});

module.exports = router;