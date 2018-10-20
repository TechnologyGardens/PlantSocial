module.exports = (req, resp) => {
        req.flash('success', 'You have successfully signed in with LinkedIn');
        resp.redirect('/plants');
};
