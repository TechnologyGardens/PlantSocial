const passport = require('passport');

module.exports = (req, resp, next) => {
    passport.authenticate('local',{
        successRedirect:"/organisms/",
        failureRedirect:"/auth/login",
        failureFlash:true
    })(req,resp,next);
};