const studentmodel = require('../model/student.model');

exports.register = async (req, res) => {
    const email = req.body.email
    const checkmail = await studentmodel.findOne({ email: email })
    const password = req.body.password
    const StudentId = `stud${Math.floor(100000 + Math.random() * 900000)}`
    console.log(StudentId);
    try {
        if (checkmail == null) {
            if (password.length > 3) {
                const data = new studentmodel({
                    _id: StudentId,
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    dob: req.body.dob,
                    sex: req.body.sex,
                    address: req.body.address,
                    phone: req.body.phone,
                    date_of_join: req.body.date_of_join,
                    parentName: req.body.parentName
                })
                const result = await data.save();

                res.status(201).json({
                    message: "Student Data Register successfull",
                    status: 201,
                    data: result
                })
            } else {
                res.status(406).json({
                    message: "Password should be greater than three number",
                    status: 406
                })
            }

        } else {
            res.status(403).json({
                message: "Email is already exited",
                status: 403
            })
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            status: 500
        })
    }
}

exports.Studentupdate = async (req, res) => {
    const email = req.body.email
    const checkmail = await studentmodel.findOne({ email: email })

    try {
        if (!checkmail) {
            const data = await studentmodel.findByIdAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                    dob: req.body.dob,
                    sex: req.body.sex,
                    address: req.body.address,
                    phone: req.body.phone,
                    date_of_join: req.body.date_of_join,
                    parentName: req.body.parentName
                }
            })

            const result = await data.save()

            res.status(200).json({
                message: "Student data update successfull",
                status: 200,
                data: result
            })

        } else {
            res.status(403).json({
                message: "Student already exited",
                status: 403
            })
        }



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.one_dataview = async (req, res) => {
    const _id = req.params.id
    const checkid = await studentmodel.findOne({ _id: _id })
    try {
        if (checkid) {
            const data = await studentmodel.findById({ _id:req.params.id })

            res.status(200).json({
                message: "Student data view successfull",
                status: 200,
                data: data
            })
        } else {
           res.status(406).json({
            message:"ID is not available",
            status:406
           }) 
        }
      
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}


exports.searchview = async (req, res) => {
    try {
        const name = req.body.name

        const data = await studentmodel.find({ "name": { $regex: ".*" + name + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "Student detail", data: data })
        } else {
            res.status(200).send({ message: "Student not found" })
        }

        // res.status(200).json({
        //     message:"Student data has been found",
        //     status:200,
        //     data:data
        // })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}



exports.Alldataview = async (req, res) => {
    try {
        const data = await studentmodel.find({})

        res.status(200).json({
            message: "Student All Data View",
            status: 200,
            result: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing Went Wrong",
            status: 500
        })
    }
}

exports.deletedata = async (req, res) => {
    try {
        const data = await studentmodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "Student data delete successfull",
            status: 200,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing Went Wrong",
            status: 500
        })
    }
}