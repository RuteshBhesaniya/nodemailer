const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    _id :{
        type:String,
        require:true
    },
    Section:{
        type:String,
        require:true
    },
    Grade:{
        type:String,
        require:true
    },
    Teacher_id:{
        type:mongoose.Schema.Types.String,
        require:true,
        ref:'Techers'
    }

},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("Classroom",Auth);