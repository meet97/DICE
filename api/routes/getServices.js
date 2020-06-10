require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {services} = require('../models/model_services');


router.use(bodyParser.urlencoded({extended: true}));
router.get('/',async (req, res)=> {

    let serv = await services.find();
    console.log(serv);
    res.send(serv);
});

module.exports = router;