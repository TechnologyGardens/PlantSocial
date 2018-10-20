const passport = require('passport');

module.exports = (req, resp, next) => {
    passport.authenticate('linkedin',{
        successRedirect:"/plants/",
        failureRedirect:"/auth/login",
        scope: ['r_basicprofile', 'r_emailaddress'], 
        failureFlash:true
    })(req,resp,next);
};