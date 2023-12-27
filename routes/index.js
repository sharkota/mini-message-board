var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  mT = req.body.mT
  mU = req.body.mU
  messages.push({text: mT, user: mU, added: new Date()});
  res.redirect('/')
})


module.exports = router;
