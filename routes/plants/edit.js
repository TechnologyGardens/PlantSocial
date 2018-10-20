const Plants = require('../../models/plant');


module.exports = (req, resp) => {
    Plants.findById(req.params.id,(err,plant) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('plants/edit',{
                plant:plant
        });
        }
    })
};