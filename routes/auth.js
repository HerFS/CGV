const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password, phone } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12); // 암호화
    await User.create({
      email,
      nick,
      password: hash,
      phone,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/profile', isLoggedIn, async (req, res, next) => {
  const { money } = req.body;
  const { user_money } = req.body;
  const add_money = Number(money) + Number(user_money) ;
  const { id } = req.body;
  try {
    await User.update({
      money: add_money,
    }, {
      where: {id: id} ,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/seat', isLoggedIn, async (req, res, next) => {
  const { user_money } = req.body;
  const { movie_price } = req.body;
  const { movie_name} = req.body;
  const { movie_day} = req.body;
  const { movie_time} = req.body;
  const { movie_seat} = req.body;
  const money = Number(user_money) - Number(movie_price) ;
  const { id } = req.body;
  try {
    await User.update({
      money: money,
      movie: movie_name,
      movie_day: movie_day,
      movie_time: movie_time,
      movie_seat: movie_seat,
      movie_price: movie_price,
    }, {
      where: {id: id} ,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
