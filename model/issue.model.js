const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id :{
        type:Object,
        require : true
    },
    type:{
        type:String,
        require:true
    },
    details:{
        type:String,
        require:true
    },
    Is_resolved:{
        type:Boolean,
        require:true
    }
},
{
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model("Issuedata",Auth)