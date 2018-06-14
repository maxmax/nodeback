var express = require('express');
var router = require('express').Router();
var multer  = require('multer');

var upload = multer({
  dest    : './public/upload/',
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  }
});

router.get('/pictures', function(req, res) {
  res.send("Pictures...");
});

router.post('/upload', upload.any(), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // res.redirect('/');
  // res.status(500).json(error);
  //// var json = JSON.parse(req.body);
  //// res.send(json);
  res.send("File uploaded!");
  res.status(204).end();
})



module.exports = router;
