const Plants = require('../../models/user');


module.exports = (req, resp) => {
    Plants.findById(req.params.id,(err,user) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('users/user',{
                user:user
        });
        }
    })
};