let mongoose = require('mongoose');
let organismSchema = mongoose.Schema({
    commonNames:[{
        name:{
            type:String,
            required:true
        },
        language:{
            type:String,
            required:true
        },
    }],
    latinName:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:false
    },
})
organismSchema.index({ commonNames: 'text', latinName: 'text', description: 'text' }, {name: 'organisms_text_index', weights: {commonName: 5 , latinName: 3, description:1}});

let Organism = module.exports = mongoose.model('Organism',organismSchema);