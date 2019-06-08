const express = require("express"),
  router = express.Router(),
  category = require("../database/category"),
  user = require("../database/users"),
  quote = require("../database/quote");

router.route("/signin").post((req, res) => {
  user
    .userLogin(req.body)
    .then(() => {
      res.status(200).redirect("/");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/signup").post((req, res) => {
  user
    .addUser(req.body)
    .then(() => {
      res.status(200).send("User registration complete!");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/quote").post((req, res) => {
    console.log(req.body);
    quote
      .addQuote(req.body)
      .then(() => {
        res.status(200).send("Quote Added!");
      })
      .catch(err => {
        res.status(301).send(err);
      });
  });

router.route("/categories").get((req, res) => {
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

router.route("/addQuote").post((req, res) => {
  console.log(req.body);
  quote
    .addQuote(req.body)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

module.exports = router;
