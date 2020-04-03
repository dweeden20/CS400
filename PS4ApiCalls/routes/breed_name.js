const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const options = {
    method: 'GET',
};


router.route('/')
    .get((req,res,next) => {
        const doRequest = async () => {
            let returnvalRaw = await fetch(options.url);
            return await returnvalRaw;
        };
    })
    .get((req, res, next) => {
        res.render('/',
            { breed: req.query.breed});
    });


fetch('https://dog.ceo/api/breed/labrador/images/random', options)
    .then((res) =>  {
        return res.json()})
    .then(data => console.log(data));







module.exports = router;



//https://dog.ceo/api/breed/hound/images