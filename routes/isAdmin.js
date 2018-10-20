module.exports = function isAdmin(req, resp, next){
    if (req.isAuthenticated() && req.user.isAdmin)
        return next();
    else {
        req.flash('danger', 'Insufficient privileges');
        resp.redirect('/auth/login');
    }
}