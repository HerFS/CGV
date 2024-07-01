const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원가입' });
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', { title: '내 정보' });
}); // 8001/profile

router.get('/movies', isLoggedIn, (req, res) => {
    res.render('movies', { title: '영화종류' });
});

router.get('/movie1', isLoggedIn, (req, res) => {
    res.render('movie1', { title: '스파이더맨 설명' });
});

router.get('/movie2', isLoggedIn, (req, res) => {
    res.render('movie2', { title: '베놈 2 설명' });
});

router.get('/movie3', isLoggedIn, (req, res) => {
    res.render('movie3', { title: '겨울왕국 2 설명' });
});

router.get('/movie4', isLoggedIn, (req, res) => {
    res.render('movie4', { title: '인비저블맨 설명' });
});

router.get('/movie5', isLoggedIn, (req, res) => {
    res.render('movie5', { title: '강릉 설명' });
});

router.get('/movie6', isLoggedIn, (req, res) => {
    res.render('movie6', { title: '1987 설명' });
});

router.get('/movie7', isLoggedIn, (req, res) => {
    res.render('movie7', { title: '듄 설명' });
});

router.get('/movie8', isLoggedIn, (req, res) => {
    res.render('movie8', { title: '싸반 설명' });
});

router.get('/ticket', isLoggedIn, (req, res) => {
    res.render('ticket', { title: '영화예매' });
});

router.get('/seat1', isLoggedIn, (req, res) => {
    res.render('seat1', { title: '영화-스파이더맨' });
});

router.get('/seat2', isLoggedIn, (req, res) => {
    res.render('seat2', { title: '영화-베놈2' });
});

router.get('/seat3', isLoggedIn, (req, res) => {
    res.render('seat3', { title: '영화-겨울왕국2' });
});

router.get('/seat4', isLoggedIn, (req, res) => {
    res.render('seat4', { title: '영화-인비저블맨' });
});

router.get('/seat5', isLoggedIn, (req, res) => {
    res.render('seat5', { title: '영화-강릉' });
});

router.get('/seat6', isLoggedIn, (req, res) => {
    res.render('seat6', { title: '영화-1987' });
});

router.get('/seat7', isLoggedIn, (req, res) => {
    res.render('seat7', { title: '영화-듄' });
});

router.get('/seat8', isLoggedIn, (req, res) => {
    res.render('seat8', { title: '영화-싸반' });
});

module.exports = router;