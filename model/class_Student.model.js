const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    Student_id :{
        type:mongoose.Schema.Types.String,
        require:true,
        ref:'Student'
    },
    classroom_id :{
        type:mongoose.Schema.Types.String,
        require:true,
        ref:'Classroom'
    },

},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("Attendance",Auth);