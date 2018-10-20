const Plant = require('../../models/plant');

module.exports = (req, resp) => {
    req.checkBody('commonName','Common Name is required').notEmpty();
    req.checkBody('latinName','Latin Name is required').notEmpty();
    req.checkBody('hardiness','USDS Hardines zone must be a number between 1 and 13').isInt({min:1, max:13});
    //check for errors
    let errors = req.validationErrors();
    if (errors){
        resp.render('plants/add',{errors:errors });
    } else {
        let plant = new Plant();
        plant.commonName = req.body.commonName;
        plant.latinName = req.body.latinName;
        plant.variety = req.body.variety;
        plant.description = req.body.description;
        plant.hardiness = req.body.hardiness;
        plant.save((err=>{
            if (err) {
                console.log(err);
                return;
            }    
            else{
                req.flash('success','Plant successfully added');
                resp.redirect('/plants');
            }
        }))
    }
};