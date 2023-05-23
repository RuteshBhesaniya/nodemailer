const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id :{
        type:Object,
        require : true
    },
    date:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
},
{
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model("Examdata",Auth)