const express = require('express');
const router = express.Router();
const multer = require('multer');
//const upload = require('express-fileupload');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
  });
  var upload = multer({ storage: storage }).single('Image')
 
router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if(err){
        res.send('image not uploaded');
    }
    else{
        res.send('image uploaded');
    }
  })
})
   

module.exports = router;