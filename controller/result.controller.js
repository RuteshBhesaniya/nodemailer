const resultmodel = require('../model/result.model');
const exammodel = require("../model/exam.model");
const studentmodel = require("../model/student.model");
const subjectmodel = require("../model/subject.model");

exports.register = async (req, res) => {

    const studentName = req.body.studentName
    const name = req.body.name
    const checkname = await studentmodel.findOne({name:studentName})
    const _id = req.params.id
    const studentid = req.body.studentid
    const checkid = await studentmodel.findOne({_id:studentid})
        try {
        if (checkname) {
               if (checkid) {
                const data = new resultmodel({
                    examid: req.body.examid,
                    studentid: req.body.studentid,
                    studentName:studentName,
                    subjectid: req.body.subjectid,
                    Marks: req.body.Marks,
                })
                const result = await data.save();
        
                res.status(201).json({
                    message: "Exam Data Register successfull",
                    status: 201,
                    data: result
                })
            } else {
               res.status(406).json({
                message:"Student ID does not match",
                status:406
               }) 
            }
           
        } else {
            res.status(406).json({
                message:"Enter is your valid student name Enter",
                status:406
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

exports.resultupdate = async (req, res) => {

    try {
        const data = await resultmodel.findByIdAndUpdate({
            exam_id: req.params.exam_id
        }, {
            $set: {
                exam_id: req.body.exam_id,
                student_id: req.body.exam_id,
                subject_id: req.body.subject_id,
                Marks: req.body.Marks,
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "Exam data update successfull",
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
    const exam_id = req.params.id
    const checkid = await resultmodel.findOne({ exam_id: exam_id })
    try {
        if (checkid) {
            const data = await resultmodel.findById({ exam_id: req.params.exam_id })

            res.status(200).json({
                message: "Exam data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "Exam data is not exited",
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
        const data = await resultmodel.find({})

        res.status(200).json({
            message: "Exam All Data View",
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
        const location = req.body.location

        const data = await resultmodel.find({ "location": { $regex: ".*" + location + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "location detail", data: data })
        } else {
            res.status(200).send({ message: "location not found" })
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
        const data = await resultmodel.findByIdAndDelete({ exam_id: req.params.exam_id })

        res.status(200).json({
            message: "Exam data delete successfull",
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