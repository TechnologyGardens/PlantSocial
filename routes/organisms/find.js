const utils = require('../utils.js');
const Organisms = require('../../models/organism');

module.exports = (req, resp) => {
    let isSearch = (req.query)&&(req.query.search);
    function callback(err,organisms) {
        if(err){
            console.log(err);
        } else{
            let title = isSearch?'Search results for: '+req.query.search:'List of plants and related organisms';
            resp.render('organisms/all',{
                title:title,
                organisms:organisms
        });
        }
    }
    if (isSearch){
        Organisms.find(
            { $text : { $search : utils.escapeRegex(req.query.search) } }, 
            { score : { $meta: "textScore" } })
        .sort({ score : { $meta : 'textScore' } })
        .exec(callback);
    }
    else
        Organisms.find({},callback);
};