const class_Studentmodel = require('../model/class_Student.model');
const studentmodel = require('../model/student.model')
const classroommodel = require('../model/classroom.model')

exports.register = async (req, res) => {

    const _id = req.params.id
    const Student_id = req.body.Student_id
    const checkid = await studentmodel.findOne({ _id: Student_id })
    const classroom_id = req.body.classroom_id
    const checkclassid = await classroommodel.findOne({ _id: classroom_id })

    try {
        if (checkid) {
            if (checkclassid) {
                const data = new class_Studentmodel({
                    Student_id: req.body.Student_id,
                    classroom_id: req.body.classroom_id
                })
                const result = await data.save();
    
                res.status(201).json({
                    message: "class_Student Data Register successfull",
                    status: 201,
                    data: result
                })
            } else {
                res.status(406).json({
                    message:"Classroom ID does not match",
                    status:406
                })
            }
         
        } else {
            res.status(406).json({
                message: "Student ID does not match",
                status: 406
            })
        }



    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            status: 500
        })
    }
}

exports.class_Studentupdate = async (req, res) => {

    try {
        const data = await class_Studentmodel.findByIdAndUpdate({
            _id: req.params._id
        }, {
            $set: {
                Student_id: req.body.Student_id,
                Date: req.body.Date,
                status: req.body.status,
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "class_Student data update successfull",
            status: 200,
            data: result
        })


    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.one_dataview = async (req, res) => {
    const _id = req.params.id
    const checkid = await class_Studentmodel.findOne({ _id: _id })
    try {
        if (checkid) {
            const data = await class_Studentmodel.findById({ _id: req.params._id })

            res.status(200).json({
                message: "class_Student data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "class_Student data is not exited",
                status: 406
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.Alldataview = async (req, res) => {
    try {
        const data = await class_Studentmodel.find({})

        res.status(200).json({
            message: "class_Student All Data View",
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

exports.searchviewexam = async (req, res) => {
    try {
        const Student_id = req.body.Student_id

        const data = await class_Studentmodel.find({ "name": { $regex: ".*" + Student_id + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "class_Student detail", data: data })
        } else {
            res.status(200).send({ message: "class_Student not found" })
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

exports.deletedata = async (req, res) => {
    try {
        const data = await class_Studentmodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "class_Student data delete successfull",
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