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

router.route("/addQuote").post((req, res) => {
  // console.log(req.body);
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

router.route("/getQuotes/:categoryName").get((req, res) => {
  // console.log(req.params.categoryName);
  // var temp = req.params.categoryName.toString().toLowerCase();
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
  console.log(req.body);
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
  console.log(req.body);
  reminder
    .submitReminder(req.body)
    .then(data => {
      res.status(200).send("Reminder set successfully!");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

module.exports = router;
