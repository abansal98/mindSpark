const
    express = require('express'),
    router = express.Router(),
    category = require('../database/category'),
    user = require('../database/users'),
    quote = require('../database/quote');

router.route('/signin')
    .post((req, res) => {
        user.userLogin(req.body)
            .then(() => {
                req.session.user = {
                    username: req.body.username
                }
                console.log(req.session);
                res.status(200).redirect('/');
            })
            .catch((err) => {
                res.status(301).send(err);
            })
        console.log(req.session);
    });

router.route('/signup')
    .post((req, res) => {
        user.addUser(req.body)
            .then(() => {
                res.status(200).send("User registration complete!");
            })
            .catch((err) => {
                res.status(301).send(err);
            })
    });

router.route('/logout')
    .get((req, res) => {
        req.session.reset();
        console.log(req.session);
        res.redirect('/signup');
    });

router.route('/ensureLogin')
    .get((req, res) => {
        if (req.session.user)
            res.status(200).send(req.session.user.username);
        else
            res.status(301).send(0);
    })

module.exports = router;