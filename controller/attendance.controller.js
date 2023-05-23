const attendancemodel = require('../model/attendance.model');
const studentmodel = require('../model/student.model')

exports.register = async (req, res) => {

    const _id = req.params.id
    const checkid = await studentmodel.findOne({_id:Student_id})

    try {
        if (checkid) {
            const data = new attendancemodel({
                Student_id:req.body.Student_id,
                Date: req.body.Date,
                status: req.body.status,
            })
            const result = await data.save();
    
            res.status(201).json({
                message: "Attendance Data Register successfull",
                status: 201,
                data: result
            })
        } else {
            res.status(406).json({
                message:"Student ID does not match",
                status:406
            })
        }
       


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            status: 500
        })
    }
}

exports.attendanceupdate = async (req, res) => {

    try {
        const data = await attendancemodel.findByIdAndUpdate({
        _id: req.params._id
        }, {
            $set: {
                Student_id:req.body.Student_id,
                Date: req.body.Date,
                status: req.body.status,
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "Attendance data update successfull",
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
    const checkid = await attendancemodel.findOne({_id:_id })
    try {
        if (checkid) {
            const data = await attendancemodel.findById({_id: req.params._id })

            res.status(200).json({
                message: "Attendance data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "Attendance data is not exited",
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
        const data = await attendancemodel.find({})

        res.status(200).json({
            message: "Attendance All Data View",
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

        const data = await attendancemodel.find({ "name": { $regex: ".*" + Student_id + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "Attendance detail", data: data })
        } else {
            res.status(200).send({ message: "Attendance not found" })
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
        const data = await attendancemodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "Attendance data delete successfull",
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