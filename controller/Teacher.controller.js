const Teachermodel = require('../model/Teacher.model');

exports.register = async (req,res) =>{
    const email = req.body.email
    const checkmail = await Teachermodel.findOne({email:email})
    const password = req.body.password
    const Teacherid = `guru${Math.floor(1000 + Math.random() * 9000)}`
    console.log(Teacherid);
    try {
        if (checkmail == null) {
            if (password.length > 3) {
                const data = new Teachermodel({
                    _id:Teacherid,
                    email:req.body.email,
                    password:req.body.password,
                    name:req.body.name,
                    dob:req.body.dob,
                    sex:req.body.sex,
                    address:req.body.address,
                    phone:req.body.phone,
                    date_of_join:req.body.date_of_join,
                })
                const result = await data.save();
        
                res.status(201).json({
                    message:"Teacher Data Register successfull",
                    status:201,
                    data:result
                })
            } else {
                res.status(406).json({
                    message:"Password should be greater than three number",
                    status:406
                })
            }
            
        } else {
            res.status(403).json({
                message:"Email is already exited",
                status:403
            })
        }
        

    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            status:500
        })
    }
}

exports.Teacherupdate = async (req,res)=>{
    const email = req.body.email
    const checkmail = await Teachermodel.findOne({email:email})

    try {
        if (!checkmail) {
            const data = await Teachermodel.findByIdAndUpdate({
                _id:req.params.id
            },{
                $set:{
                    email:req.body.email,
                    password:req.body.password,
                    name:req.body.name,
                    dob:req.body.dob,
                    sex:req.body.sex,
                    address:req.body.address,
                    phone:req.body.phone,
                    date_of_join:req.body.date_of_join,
                    parentName:req.body.parentName
                }
            })
    
            const result = await data.save()
    
            res.status(200).json({
                message:"Teacher data update successfull",
                status:200,
                data:result
            })
             
        }else{
            res.status(403).json({
                message:"Teacher already exited",
                status:403
             })
        }

        

    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            status:500
        })
    }
}

exports.one_dataview = async (req,res)=>{
    const _id = req.params.id
    const checkid = await Teachermodel.findOne({_id:_id})
    try {
        if (checkid) {
            const data = await Teachermodel.findById({_id:req.params.id})

        res.status(200).json({
            message:"Teacher data view successfull",
            status:200,
            data:data
        })
        } else {
            res.status(406).json({
                message:"Teacher data is not exited",
                status:406
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            status:500
        })
    }
}

exports.Alldataview = async (req,res)=>{
    try {
        const data = await Teachermodel.find({})

        res.status(200).json({
            message:"Teacher All Data View",
            status:200,
            result:data
        })
    } catch (error) {
        res.status(500).json({
             message:"Somthing Went Wrong",
             status:500
        })
    }
}

exports.searchviewteacher = async (req,res)=>{
    try {
        const name = req.body.name

        const data = await Teachermodel.find({"name":{$regex:".*"+name+".*"}})

        if (data.length > 0) {
            res.status(200).send({message:"Teacher detail",data:data})
        } else {
            res.status(200).send({message:"Teacher not found"})
        }

        // res.status(200).json({
        //     message:"Student data has been found",
        //     status:200,
        //     data:data
        // })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something Went Wrong",
            status:500
        })
    }
}

exports.deletedata = async (req,res) =>{
    try {
        const data = await Teachermodel.findByIdAndDelete({_id:req.params.id})
        
        res.status(200).json({
            message:"Teacher data delete successfull",
            status:200,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message:"Somthing Went Wrong",
            status:500
        })
    }
}