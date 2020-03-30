const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const options = {
    method: 'GET',
};

const doRequest = async () => {
    let returnvalRaw = await fetch(options.url);
    return await returnvalRaw.json();
};


fetch('https://dog.ceo/api/breed/hound/images/random', options)
    .then(res => res.json())
    .then(json => console.log(json));




module.exports = router;



//https://dog.ceo/api/breed/hound/images