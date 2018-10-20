const Plant = require('../../models/plant');

module.exports = (req, resp) => {
    let plant = {};
    plant.commonName = req.body.commonName;
    plant.latinName = req.body.latinName;
    plant.variety = req.body.variety;
    plant.description = req.body.description;
    plant.hardiness = req.body.hardiness;
    
    let query = {_id:req.params.id};

    Plant.updateOne(query,plant, (err=>{
        if (err) {
            console.log(err);
            return;
        }    
        else{
            req.flash('success','Plant successfully updated');
            resp.redirect('/plants');
        }
    }))
};