const
	express = require('express'),
    router = express.Router(),
    category = require('../database/category'),
    user = require('../database/users'),
    quote = require('../database/quote');


router.route('/users')
    .get((req, res) => {
        console.log("db/users get accessed!");
        user.getUsers()
        .then((data)=> {
            res.send(data);
        })
    });

module.exports = router