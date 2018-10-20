const Plants = require('../../models/plant');

module.exports = (req, resp) => {
    let query={_id:req.params.id};
    console.log(query);
    Plants.deleteOne(query,(err) =>{
        if(err){
            console.log(err);
        } else
            resp.send('Success');
    });
};