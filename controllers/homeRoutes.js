//These are all the view routes for your application
const router = require("express").Router();
const { Users, Posts } = require("../models");
const authy = require("../utils/helpers");

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get("/", async (req, res) => {
  try {
    const dbPosts = await Posts.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    // console.log(dbPosts);
    var serializedata = dbPosts.map(data => data.get({ plain: true }))
    res.render("home", {
      posts: serializedata,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/posts", async (req, res) => {
  try {
    //grab all posts from db using the Posts model,
    //don't forget to use await!
    const dbPosts = await Posts.findAll();
    var serializedata = dbPosts.map(data => data.get({ plain: true }))
    // console.log(dbPosts);
    res.render("posts", {
      product: serializedata,
    });
    //serialize the data, [{dataValues:{data in here you want}}];

    //render the view you want and pass data into the view,
    //reference the route below
  } catch (err) {
    console.log("wilson messed up? oops", err);
  }
});

router.get("/posts/:id", authy, async (req, res) => {
  try {
    const dbPosts = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Posts,
        },
      ],
    });
    var serializedata = dbPosts.map(data => data.get({ plain: true }))
    res.render("posts", {
      posts: serializedata,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/register", async (req, res) => {
  try {
    const dbUsers = await Users.findAll();
    res.render("register", {
      users: dbUsers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/logout", async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
