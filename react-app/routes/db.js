const express = require("express"),
  router = express.Router(),
  category = require("../database/category"),
  user = require("../database/users"),
  quote = require("../database/quote"),
  reminder = require("../database/reminder");
report = require("../database/report");

router.route("/signin").post((req, res) => {
  user
    .userLogin(req.body)
    .then((data) => {
      req.session.user = {
        username: req.body.username,
        avatar: data.avatar,
        email: data.email
      };
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
      res
        .status(200)
        .send(
          "User registration complete, please check your email for verification!"
        );
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/logout").get((req, res) => {
  req.session.reset();
  res.redirect("/signin");
});

router.route("/ensureLogin").get((req, res) => {
  if (req.session.user) res.status(200).send(req.session.user.username);
  else res.status(401).send("0");
});

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

router.route("/quoteList/:authorName").get((req, res) => {
  quote
    .fetchQuote(req.params.authorName)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

//RATING
router.route("/quote/rating/:quoteId").post((req, res) => {
  quote
    .rateQuote(req.body, req.params.quoteId)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

// COMMENT
router.route("/quote/comment/:quoteId").post((req, res) => {
  const newComment = {
    commentText: req.body.commentText,
    name: req.session.user.username,
  };

  quote.addComment(newComment, req.params.quoteId)
  .then(() => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(301).send(err);
  });

});

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

router.route("/forgotPassword").post((req, res) => {
  //console.log(req.body);
  user
    .forgotPassword(req.body)
    .then(() => {
      res.status(200).send("Forgot Password verfication sent");
      //  res.redirect('/signin')
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/checkToken").post((req, res) => {
  //console.log(req.body);
  user
    .checkForgotPasswordToken(req.body)
    .then(() => {
      res.status(200).send("Token exist");
      //res.status(200).redirect("/reset");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/checkRegistrationToken").post((req, res) => {
  // console.log(req.body);
  user
    .checkRegistrationToken(req.body)
    .then(() => {
      res.status(200).send("Token exist");
      //res.status(200).redirect("/reset");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/updatePassword").post((req, res) => {
  //console.log(req.body);
  user
    .updatePassword(req.body)
    .then(() => {
      res.status(200).send("Password Updated successfully!");
      //res.status(200).redirect("/reset");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/changePassword").post((req, res) => {
  //console.log(req.body);
  user
    .changePassword(req.body)
    .then(() => {
      res.status(200).send("Password Changed successfully!");
      //res.status(200).redirect("/reset");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/submitReport").post((req, res) => {
  // console.log(req.body);
  report
    .submitReport(req.body)
    .then(data => {
      res.status(200).send("Report Submitted!");
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/reportIncrement").post((req, res) => {
  // console.log(req.body);
  quote
    .reportIncrement(req.body)
    .then(data => {
      console.log("Increament success!");
      res.status(200);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/checkReport/:username/:quoteId").get((req, res) => {
  report
    .checkReport(req.params.username, req.params.quoteId)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

router.route("/getPendingQuotes").get((req, res) => {
  quote
    .fetchPendingQuoteList()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(301).send(err);
    });
});

module.exports = router;
