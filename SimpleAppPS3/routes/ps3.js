const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('index',
            { name: req.query.name,
                lastname: req.query.lastname});
    })
    .post((req, res, next) => {
        const str = req.body.string;
        const len  = str.length;
        res.render('index',
            {string: str,
                length: len})
    });


module.exports = router;
