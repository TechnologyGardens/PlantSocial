const passport = require('passport');

module.exports = (req, resp, next) => {
    passport.authenticate('facebook',{
        successRedirect:"/organisms/",
        failureRedirect:"/auth/login",
        failureFlash:true
    })(req,resp,next);
};