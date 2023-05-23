const classroommodel = require('../model/classroom.model');
const teachermodel = require('../model/Teacher.model')

exports.register = async (req, res) => {

    const classroom_id = `class${Math.floor(1000 + Math.random() * 9000)}`
    console.log(classroom_id);

    const _id = req.params.id
    const checkid = await teachermodel.findOne({_id:Teacher_id})

    try {
        if (checkid) {
            const data = new classroommodel({
                _id:classroom_id,
                Section: req.body.Section,
                Grade: req.body.Grade,
                Teacher_id:req.body.Teacher_id
            })
            const result = await data.save();
    
            res.status(201).json({
                message: "classroom Data Register successfull",
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

exports.classroomupdate = async (req, res) => {

    const classroom_id = `class${Math.floor(1000 + Math.random() * 9000)}`
    console.log(classroom_id);

    try {
        const data = await classroommodel.findByIdAndUpdate({
        _id: req.params._id
        }, {
            $set: {
                _id:classroom_id,
                Section: req.body.Section,
                Grade: req.body.Grade,
                Teacher_id:req.body.Teacher_id
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "classroom data update successfull",
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
    const checkid = await classroommodel.findOne({_id:_id })
    try {
        if (checkid) {
            const data = await classroommodel.findById({_id: req.params._id })

            res.status(200).json({
                message: "classroom data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "classroom data is not exited",
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
        const data = await classroommodel.find({})

        res.status(200).json({
            message: "classroom All Data View",
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
        const _id = req.params._id

        const data = await classroommodel.find({ "name": { $regex: ".*" + _id + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "classroom detail", data: data })
        } else {
            res.status(200).send({ message: "classroom not found" })
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
        const data = await classroommodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "classroom data delete successfull",
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