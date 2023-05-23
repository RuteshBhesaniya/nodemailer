const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id :{
        type : String,
        require : true
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},
{
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model("Subjectdata",Auth)