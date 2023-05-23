const timetablemodel = require('../model/timetable.model');

exports.register = async (req, res) => {

    const timetable_id = `schedule${Math.floor(1000 + Math.random() * 9000)}`
    console.log(timetable_id);

    try {
        const data = new timetablemodel({
            _id: timetable_id,
            Day: req.body.Day,
            time: req.body.time,
            subject: req.body.subject
        })
        const result = await data.save();

        res.status(201).json({
            message: "timetable Data Register successfull",
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

exports.timetableupdate = async (req, res) => {

    const timetable_id = `class${Math.floor(1000 + Math.random() * 9000)}`
    console.log(timetable_id);

    try {
        const data = await timetablemodel.findByIdAndUpdate({
            _id: req.params._id
        }, {
            $set: {
                _id: timetable_id,
                Day: req.body.Day,
                time: req.body.time,
                subject: req.body.subject
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "timetable data update successfull",
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
    const checkid = await timetablemodel.findOne({ _id: _id })
    try {
        if (checkid) {
            const data = await timetablemodel.findById({ _id: req.params._id })

            res.status(200).json({
                message: "timetable data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "timetable data is not exited",
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
        const data = await timetablemodel.find({})

        res.status(200).json({
            message: "timetable All Data View",
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
        const subject = req.body.subject

        const data = await timetablemodel.find({ "name": { $regex: ".*" + subject + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "timetable detail", data: data })
        } else {
            res.status(200).send({ message: "timetable not found" })
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
        const data = await timetablemodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "timetable data delete successfull",
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