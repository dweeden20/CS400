const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
      res.render('index',
          { name: req.query.name,
            lastname: req.query.lastname});
    });


module.exports = router;