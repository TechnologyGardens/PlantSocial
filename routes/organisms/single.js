const Organisms = require('../../models/organism');


module.exports = (req, resp) => {
    Organisms.findById(req.params.id,(err,organism) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('organisms/organism',{
                organism:organism
        });
        }
    })
};