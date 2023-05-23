const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000 ;
require("dotenv").config();
require("./database/connecting")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// router

// Student
const Studentrouter = require('./router/student.routes');
app.use("/Student",Studentrouter)

//Teacher 
const Teacherrouter = require("./router/Teacher.routes");
app.use("/Teacher",Teacherrouter)

// subject
const Subjectrouter = require("./router/subject.routes");
app.use("/subject",Subjectrouter)

// exam
const Examrouter = require("./router/exam.routes")
app.use("/exam",Examrouter)

// result
const Resultrouter = require("./router/result.routes")
app.use("/result",Resultrouter)

app.listen(port,()=>{
    console.log(`server is running port ${port}`);
});