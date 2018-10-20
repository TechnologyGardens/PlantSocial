module.exports = (req, resp) => {
        req.flash('success', 'You have successfully signed in with Facebook');
        resp.redirect('/plants');
};
