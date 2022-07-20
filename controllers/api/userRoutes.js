const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.dataValues.user_id
      res.json(userData)
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log('user login body', req.body);
  try {
    const UserData = await Users.findOne({
      where: {
        username: req.body.username,
      },
    });
    //need to serialize UserData
    console.log('userdata', UserData);
    const serializedata = UserData.get({ plain: true });
    console.log('serializedata', serializedata);

    if (!UserData) {
      res
        .status(401)
        .json({ message: 'Invalid Username or Password. Please try again!' });
      return;
    }
    const passwordValid = await bcrypt.compare(
      req.body.password,
      serializedata.password
    );
    console.log('passworddata', passwordValid);
    if (!passwordValid) {
      res
        .status(401)
        .json({ message: 'Invalid Email or Password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.sessions, (loggedIn = true);
      req
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      req.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
