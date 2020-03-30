const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res,next) => {
        res.render('index');
    });

router.route('/breed_name')
.get((req, res, next) => {
    res.render('breed_name')

});


/*router.route('/')
    .get((req, res, next) => {
        const http = 'https://dog.ceo/api/breed/hound/images'
        res.render('index',
        {
        });
});

router.get()

 */

module.exports = router;