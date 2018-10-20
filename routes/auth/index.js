const passport=require('passport');
const router = require('express').Router();
const facebook = require('./facebook');
const facebookCB = require('./facebookCB');
const google = require('./google');
const googleCB = require('./googleCB');
const linkedin = require('./linkedin');
const linkedinCB = require('./linkedinCB');
const twitter = require('./twitter');
const twitterCB = require('./twitterCB');
const loginForm = require('./loginForm');
const login = require('./login');
const logout = require('./logout');

let facebookAuth = passport.authenticate('facebook', { failureRedirect: '/auth/login' });
let googleAuth = passport.authenticate('google', { failureRedirect: '/auth/login' });
let linkedinAuth = passport.authenticate('linkedin', { failureRedirect: '/auth/login' });
let twitterAuth = passport.authenticate('twitter', { failureRedirect: '/auth/login' });

router.get('/facebook', facebook);
router.get('/facebook/callback', facebookAuth, facebookCB);
router.get('/google', google);
router.get('/google/callback', googleAuth, googleCB);
router.get('/twitter', twitter);
router.get('/twitter/callback', twitterAuth, twitterCB);
router.get('/linkedin', linkedin);
router.get('/linkedin/callback', linkedinAuth, linkedinCB);
router.get('/login',loginForm);
router.post('/login',login);
router.get('/logout',logout);

module.exports = router;