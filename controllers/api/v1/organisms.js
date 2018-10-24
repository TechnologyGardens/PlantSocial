const utils = require('../../utils.js');
const Organism = require('../../../models/organism');

class OrganismsController {
    static findById(req, resp) {
        Organism.findById(req.params.id,(err,organism) =>{
            if(err){
                console.log(err);
            } else{
                resp.send(organism);
            }
        });
    }

    static get(req, resp) {
        let isSearch = (req.query)&&(req.query.search);
        function callback(err,organisms) {
            if(err){
                console.log(err);
            } else{
                resp.send(organisms);
            }
        }
        if (isSearch){
            Organism.find(
                { $text : { $search : utils.escapeRegex(req.query.search) } }, 
                { score : { $meta: "textScore" } })
            .sort({ score : { $meta : 'textScore' } })
            .exec(callback);
        }
        else
            Organism.find({},callback);
    };

    static post(req, resp) {
        let organism = new Organism();
        organism.commonNames = req.body.commonNames;
        organism.latinName = req.body.latinName;
        organism.description = req.body.description;

        organism.save(organism, err=>{
            if (err) {
                console.log(err);
                resp.status(400).send(err);
            }
            else    
                resp.status(201).send();
        });
        
    };

    static put(req, resp) {
        let organism = {};
        organism.commonNames = req.body.commonNames;
        organism.latinName = req.body.latinName;
        organism.description = req.body.description;
        
        let query = {_id:req.params.id};
    
        Organism.updateOne(query,organism, (err=>{
            if (err) {
                console.log(err);
                resp.status(400).send(err);
                return;
            }    
            else{
                resp.status(201).send();
            }
        }))
    };

    static delete(req, resp){
        let query={_id:req.params.id};
        console.log(query);
        Organism.deleteOne(query,(err) =>{
            if(err){
                console.log(err);
            } else
                resp.send();
        });
    };
};

module.exports = OrganismsController;