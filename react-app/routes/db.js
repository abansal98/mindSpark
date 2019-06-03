const
	express = require('express'),
    router = express.Router(),
    category = require('../database/category'),
    user = require('../database/users'),
    quote = require('../database/quote');

router.route('/signin')
.post((req, res)=>{
    user.userLogin(req.body)
    .then(()=>{
        res.status(200).redirect('/');
    })
    .catch((err)=>{
        res.status(301).send(err);
    })
})

router.route('/signup')
.post((req, res)=>{
    user.addUser(req.body)
    .then(()=>{
        res.status(200).send("User registration complete!");
    })
    .catch((err)=>{
        res.status(301).send(err);
    })
})

module.exports = router;