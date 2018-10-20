function Util () {}

Util.escapeRegex = function (text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&');
};

module.exports = Util;

