const express = require("express"),
  router = express.Router(),
  category = require("../database/category"),
  user = require("../database/users"),
  quote = require("../database/quote"),
  reminder = require("../database/reminder");
  

router.route('/signin')
    .post((req, res) => {
        user.userLogin(req.body)
            .then(() => {
                req.session.user = {
                    username: req.body.username
                }
                res.status(200).redirect('/');
            })
            .catch((err) => {
                res.status(301).send(err);
            })
    });

router.route('/signup')
    .post((req, res) => {
        user.addUser(req.body)
            .then(() => {
                res.status(200).send("User registration complete, please check your email for verification!");
            })
            .catch((err) => {
                res.status(301).send(err);
            })
    });

router.route('/logout')
    .get((req, res) => {
        req.session.reset();
        res.redirect('/signin');
    });

router.route('/ensureLogin')
    .get((req, res) => {
        if (req.session.user)
            res.status(200).send(req.session.user.username);
        else
            res.status(401).send('0');
    })

router.route("/addQuote").post((req, res) => {
    quote
      .addQuote(req.body)
      .then(() => {
        res.status(200).send("Quote Added!");
      })
      .catch(err => {
        res.status(301).send(err);
      });
  });

router.route("/quoteList").get((req, res) => {
  quote.fetchQuote()
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(301).send(err);
  })
})

router.route("/getCategories").get((req, res) => {
  category
    .fetchCategoryList()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/getUserInfo/:username").get((req, res) => {
  user
    .getUser(req.params.username)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/getQuotes/:categoryName").get((req, res) => {
  quote
    .fetchQuoteList(req.params.categoryName)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/addCategory").post((req, res) => {
  category
    .addCategory(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/submitReminder").post((req, res) => {
  reminder
    .submitReminder(req.body)
    .then(data => {
      res.status(200).send("Reminder set successfully!");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route('/verify')
    .post((req, res) => {
     // console.log(req.body);
        user.verifyToken(req.body)
            .then(() => {
                res.status(200).send('User verified successfully');
              //  res.redirect('/signin')
            })
            .catch((err) => {
                res.status(301).send(err);
            })
    });

    router.route('/forgotPassword')
    .post((req, res) => {
      console.log(req.body);
        user.forgotPassword(req.body)
            .then(() => {
                res.status(200).send('Forgot Password verfication sent');
              //  res.redirect('/signin')
            })
            .catch((err) => {
                res.status(301).send(err);
            })
    });

module.exports = router;