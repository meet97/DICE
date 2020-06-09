const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const assert = require('assert');

const url = 'mongodb+srv://admin:admin@cluster0-fkuau.mongodb.net/DICE?retryWrites=true&w=majority';


router.get('/',function (req, res, next) {
    var resultService = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('services').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultService.push(doc);
        }, function () {
            db.close();
            res.render('index' , {items: resultService});
        });
    })
});

module.exports = router;