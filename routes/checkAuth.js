module.exports = function isAuthenticated(req, resp, next){
        if (req.isAuthenticated())
            return next();
        else {
            req.flash('danger', 'Plase sign in first');
            resp.redirect('/auth/login');
        }
    }