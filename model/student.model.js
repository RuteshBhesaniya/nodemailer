const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    sex:{
        type:String,    
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    date_of_join:{
        type:String,
        require:true
    },
    parentName:{
        type:String,
        require:true
    }

},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("Student",Auth)