const wikiRouter = require('./wiki');
const userRouter = require('./user');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
  console.log('in root')
  res.send('got to GET /');
  next();
})
router.use('/wiki', wikiRouter);

module.exports = router;
