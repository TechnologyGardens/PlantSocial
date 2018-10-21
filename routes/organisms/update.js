const Organism = require('../../models/organism');

module.exports = (req, resp) => {
    let organism = {};
    organism.commonNames = req.body.commonNames;
    organism.latinName = req.body.latinName;
    organism.description = req.body.description;
    
    let query = {_id:req.params.id};

    Organism.updateOne(query,organism, (err=>{
        if (err) {
            console.log(err);
            return;
        }    
        else{
            req.flash('success','Organism successfully updated');
            resp.redirect('/organisms');
        }
    }))
};