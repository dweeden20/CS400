const express = require('express');
const request = require("request");
const router = express.Router();


router.get('/', function(req, res, next)  {
    const options = {
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all',
        headers: {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.render('index', {breeds : JSON.parse(response.body)});
    });
});

router.route('/breed_name')
    .get((req, res, next) => {
        res.render('breed_name' ,
            {breed: req.query.breed})
    });




module.exports = router;