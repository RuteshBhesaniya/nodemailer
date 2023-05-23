const Exammodel = require('../model/exam.model');

exports.register = async (req, res) => {
    const exam_id = `exam${Math.floor(1000 + Math.random() * 9000)}`
    console.log(exam_id);
    try {
        const data = new Exammodel({
            _id: exam_id,
            name: req.body.name,
            date: req.body.date,
        })
        const result = await data.save();

        res.status(201).json({
            message: "Exam Data Register successfull",
            status: 201,
            data: result
        })


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            status: 500
        })
    }
}

exports.exapupdate = async (req, res) => {

    try {
        const data = await Exammodel.findByIdAndUpdate({
        _id: req.params._id
        }, {
            $set: {
                name: req.body.name,
                date: req.body.date,
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
    const _id = req.params.id
    const checkid = await Exammodel.findOne({_id:_id })
    try {
        if (checkid) {
            const data = await Exammodel.findById({_id: req.params._id })

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
        const data = await Exammodel.find({})

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
        const name = req.body.name

        const data = await Exammodel.find({ "name": { $regex: ".*" + name + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "Exam detail", data: data })
        } else {
            res.status(200).send({ message: "Exam not found" })
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
        const data = await Exammodel.findByIdAndDelete({ _id: req.params._id })

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