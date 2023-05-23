const mongoose = require('mongoose');

const Auth = mongoose.Schema({

    examid: {
        type:mongoose.Schema.Types.String,
        ref: "Examdata"
    },
    studentid: {
        type:mongoose.Schema.Types.String,
        ref: "Student"
    },
    studentName:{
        type:String,
        require:true
    },
    subjectid: {
        type:mongoose.Schema.Types.String,
        ref: "Subjectdata"
    },
    Marks: {
        type: String,
        require: true
    },
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports =new mongoose.model("resultdata", Auth)