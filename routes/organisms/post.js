const Organism = require('../../models/organism');

module.exports = (req, resp) => {
    req.checkBody('latinName','Latin Name is required').notEmpty();
    //check for errors
    let errors = req.validationErrors();
    if (errors){
        resp.render('organisms/add',{errors:errors });
    } else {
        let organism = new Organism();
        organism.commonNames = req.body.commonNames;
        organism.latinName = req.body.latinName;
        organism.description = req.body.description;
        organism.save((err=>{
            if (err) {
                console.log(err);
                return;
            }    
            else{
                req.flash('success','Organism successfully added');
                resp.redirect('/organisms');
            }
        }))
    }
};