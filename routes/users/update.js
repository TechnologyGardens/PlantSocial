const bcrypt = require('bcryptjs');
const User = require('../../models/user');

module.exports = (req, resp) => {
    req.checkBody('name','Name is required').notEmpty();
    req.checkBody('email','E-mail is required').notEmpty()
    req.checkBody('email','E-mail is not valid').isEmail();
    req.checkBody('username','User is required').notEmpty();

    let user = {};
    user._id = req.params.id;
    user.name = req.body.name;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;
    
    let query = {_id:req.params.id}

    function updateUser(){
        User.updateOne(query,user, (err=>{
            if (err) {
                console.log(err);
                return;
            }    
            else{
                req.flash('success','User successfully updated');
                resp.redirect('/organisms');
            }
        }))
    }

    let errors = req.validationErrors();
    if (errors){
        resp.render('users/edit',{errors:errors, user:user });
    } else {
        User.findById(req.params.id, (err,storedUser)=>{
            if (err) console.log(err);
            else if (user.password!==storedUser.password)
                bcrypt.hash(req.body.password,10, (err, hash)=>{
                    if (err)
                        console.log(err);
                    user.password = hash;
                    updateUser();
            
                });
            else
                updateUser();
        })
}
};



