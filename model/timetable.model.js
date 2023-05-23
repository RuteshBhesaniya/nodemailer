const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id :{
        type:String,
        require:true
    },
    Day:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    }

},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("Timetable",Auth);