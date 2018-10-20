const Users = require('../../models/user');


module.exports = (req, resp) => {
    Users.findById(req.params.id,(err,user) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('users/edit',{
                user:user
        });
        }
    })
};