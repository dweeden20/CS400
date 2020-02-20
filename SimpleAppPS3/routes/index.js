const express = require('express');
const router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
  //res.(`Name: ${req.query.name}, Lastname: ${req.query.lastname}`)
  res.render('index',
      { name: req.query.name,
        lastname: req.query.lastname});

});


router.post('/', (req, res, next) => {

  res.send({ name: req.body.name,
    lastname: req.body.lastname})
});


module.exports = router;
