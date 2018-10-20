const Users = require('../../models/user');

module.exports = (req, resp) => {

    function del(){
        let query={_id:req.params.id};
        Users.deleteOne(query,(err) =>{
            if(err){
                console.log(err);
            } else
                resp.send('Success');
        });
    } 

    if (req.user.isAdmin)
        del()
    else     
        Users.findById(req.params.id,(err,user)=>{
            if ((err)||(user._id != req.params.id)){
            resp.status(500).send();     
            } else
                del();
        })
};