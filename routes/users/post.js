const bcrypt = require('bcryptjs');
const User = require('../../models/user');


module.exports = (req, resp) => {
    req.checkBody('name','Name is required').notEmpty();
    req.checkBody('email','E-mail is required').notEmpty()
    req.checkBody('email','E-mail is not valid').isEmail();
    req.checkBody('username','User is required').notEmpty();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('passwordConf','Passwords do not match').equals(req.body.password);

    //check for errors
    let errors = req.validationErrors();
    if (errors){
        resp.render('users/register',{errors:errors });
    } else {
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.username = req.body.username;
        bcrypt.hash(req.body.password,10, (err, hash)=>{
            if (err)
                console.log(err);
            user.password = hash;
            
            user.isAdmin = false;

            User.count({}, (err, count)=>{
                if (err)
                    console.log(err);
                user.isAdmin = count==0;
                user.save((err=>{
                    if (err) {
                        console.log(err);
                        return;
                    }    
                    else{
                        req.flash('success','User successfully regisered');
                        resp.redirect('/auth/login');
                    }
                }))
            });
        })
    }
};