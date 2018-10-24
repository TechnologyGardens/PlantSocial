const Users = require('../../models/user');


module.exports = (req, resp) => {
    Users.find({},(err,users) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('users/all',{
                title:'List of users',
                users:users
        });
        }
    })
};