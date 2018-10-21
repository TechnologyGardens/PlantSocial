const passport = require('passport');

module.exports = (req, resp, next) => {
    passport.authenticate('google',{
        successRedirect:"/organisms/",
        failureRedirect:"/auth/login",
        scope:['https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile'],
        failureFlash:true
     })
    (req,resp,next);
};