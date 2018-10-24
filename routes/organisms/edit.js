const Organisms = require('../../models/organism');
const languages = require('../../res/languages.json');


module.exports = (req, resp) => {
    Organisms.findById(req.params.id,(err,organism) =>{
        if(err){
            console.log(err);
        } else{
            resp.render('organisms/edit',{
                organism:organism,
                languages:languages, 
        });
        }
    })
};