const passport = require('passport');

module.exports = (req, resp, next) => {
    passport.authenticate('twitter',{
        successRedirect:"/organisms/",
        failureRedirect:"/auth/login",
        failureFlash:true
    })(req,resp,next);
};