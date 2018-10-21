module.exports = (req, resp) => {
        req.flash('success', 'You have successfully signed in with Google');
        resp.redirect('/organisms');
};
