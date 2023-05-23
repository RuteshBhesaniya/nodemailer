const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    Student_id :{
        type:mongoose.Schema.Types.String,
        require:true,
        ref:'Student'
    },
    Date:{
        type:Date,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    }

},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("Attendance",Auth);