/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { Posts } = require('../../models');


router.get('/posts', function (req, res) {
  //res.send('products list');
  Posts.findAll()
    .then((posts) => {
      res.status(200).json(posts);
    });
});

router.post('/', (req, res) => {
  Posts.create(req.body)
    .then((posts) => {

      let output = { status: 'success', data: posts };
      res.status(200).json(output);

    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.put('/update/:id', (req, res) => {
 const posts = Posts.update(req.body, { where: { id: req.params.id } })
 .then((posts) => {
    res.status(200).json(posts);
  }
  ).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  }
  );
 
});

router.delete('/remove', function (req, res) {

  if (req.session.loggedIn) {
    Posts.destroy({ where: { id: req.body.productId } });
    let output = { status: 'success' };
    res.status(200).json(output);
  } else {
    res.send('not logged in');
  }

});



module.exports = router;