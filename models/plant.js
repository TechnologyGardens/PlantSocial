let mongoose = require('mongoose');
let plantSchema = mongoose.Schema({
    commonName:{
        type:String,
        required:true
    },
    latinName:{
        type:String,
        required:true
    },
    variety:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    hardiness:{
        type:Number,
        required:false
    }
})
plantSchema.index({ commonName: 'text', latinName: 'text', variety: 'text',description: 'text' }, {name: 'plants_text_index', weights: {commonName: 5 , latinName: 3, variety: 1,description:1}});

let Plant = module.exports = mongoose.model('Plant',plantSchema);