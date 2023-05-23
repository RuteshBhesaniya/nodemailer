const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Studentdata")

.then(()=>{
    console.log("connected successfull");
})

.catch(()=>{
    console.log("connected not successfull");
})