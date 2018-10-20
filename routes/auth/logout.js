module.exports = (req, resp) => {
    req.logout();
    req.flash('success', 'You have successfully signed out');
    resp.redirect('/auth/login');
    };
