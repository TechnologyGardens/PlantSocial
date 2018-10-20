let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profileId:{
        type:String,
        required:false
    },
    provider:{
        type:String,
        required:true,
        default:'local'
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
})

let User = module.exports = mongoose.model('User',UserSchema);