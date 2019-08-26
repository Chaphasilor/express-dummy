var express = require('express');
var router = express.Router(['strict']);
const url = require('url');
const db = require('../config/db');


router.get('/', function(req, res, next) {
  res.send("This is the root of the database API!");
});

// router.get('/search/:query', (req, res, next) => {
//   console.log(req.params);
//   res.send("You searched for '"+req.params.query+"'!");
// })

router.get('/strings', (req, res, next) => {
  console.log(url.parse(req.url, true));
  res.send(db.strings.get(url.parse(req.url, true).query.id));
})
router.put('/strings', (req, res, next) => {
  console.log(req.body);
  res.send(db.strings.insert(req.body.data));
})
router.delete('/strings', (req, res, next) => {
  console.log(req.body);
  res.send(db.strings.delete(req.body.id));
})


module.exports = router;
