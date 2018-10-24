const utils = require('../../utils.js');
const User = require('../../../models/user');

class UsersController {
    static findById(req, resp) {
        User.findById(req.params.id,(err,user) =>{
            if(err){
                console.log(err);
            } else{
                resp.send(user);
            }
        });
    }

    static get(req, resp) {
        User.find({},(err,users) =>{
            if(err){
                console.log(err);
            } else{
                resp.send(users);
            }
        });
    };

    static post(req, resp) {
        let user = new User();
        user.commonNames = req.body.commonNames;
        user.latinName = req.body.latinName;
        user.description = req.body.description;
        console.log(user);
        user.save(user, err=>{
            if (err) {
                console.log(err);
                resp.status(400).send(err);
            }
            else    
                resp.status(201).send();
        });
        
    };

    static delete(req, resp){
        let query={_id:req.params.id};
        console.log(query);
        User.deleteOne(query,(err) =>{
            if(err){
                console.log(err);
            } else
                resp.send();
        });
    };
};

module.exports = UsersController;