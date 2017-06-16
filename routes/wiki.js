const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

function generateUrlTitle (title) {
  if (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2, 7);
  }
}

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  console.log(req.body.title);

  var page = Page.build({
    title: req.body.title,
    content: req.body.content

  })

  page.save().then(function(){
    res.redirect('/');
  });

});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

module.exports = router;
