const utils = require('../utils.js');
const Plants = require('../../models/plant');

module.exports = (req, resp) => {
    let isSearch = (req.query)&&(req.query.search);
    function callback(err,plants) {
        if(err){
            console.log(err);
        } else{
            let title = isSearch?'Search results for: '+req.query.search:'List of plants';
            resp.render('plants/all',{
                title:title,
                plants:plants
        });
        }
    }
    if (isSearch){
        Plants.find(
            { $text : { $search : utils.escapeRegex(req.query.search) } }, 
            { score : { $meta: "textScore" } })
        .sort({ score : { $meta : 'textScore' } })
        .exec(callback);
    }
    else
        Plants.find({},callback);
};