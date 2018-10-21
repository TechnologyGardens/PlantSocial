const Organisms = require('../../models/organism');

module.exports = (req, resp) => {
    let query={_id:req.params.id};
    console.log(query);
    Organisms.deleteOne(query,(err) =>{
        if(err){
            console.log(err);
        } else
            resp.send('Success');
    });
};