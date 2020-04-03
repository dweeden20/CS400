const express = require('express');
const request = require("request");
const router = express.Router();


router.route('/')
    .get((req, res,next) => {
        res.render('index');
    });

router.route('/breed_name')
    .get((req, res, next) => {
        res.render('breed_name' ,
         {breed: req.query.breed})
});



module.exports = router;