const subjectmodel = require('../model/subject.model');

exports.register = async (req, res) => {
    const subject_id = `sub${Math.floor(1000 + Math.random() * 9000)}`
    console.log(subject_id);
    try {
        const data = new subjectmodel({
            _id: subject_id,
            name: req.body.name,
            description: req.body.description,
        })
        const result = await data.save();

        res.status(201).json({
            message: "subject Data Register successfull",
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

exports.subjectupdate = async (req, res) => {

    try {
        const data = await subjectmodel.findByIdAndUpdate({
            _id: req.params._id
        }, {
            $set: {
                name: req.body.name,
                date: req.body.date,
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "subject data update successfull",
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
    const _id = req.params._id
    const checkid = await subjectmodel.findOne({_id: _id })
    try {
        if (checkid) {
            const data = await subjectmodel.findById({_id: req.params._id })

            res.status(200).json({
                message: "subject data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "subject data is not exited",
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
        const data = await subjectmodel.find({})

        res.status(200).json({
            message: "subject All Data View",
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

exports.searchviewsubject = async (req, res) => {
    try {
        const name = req.body.name

        const data = await subjectmodel.find({ "name": { $regex: ".*" + name + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "subject detail", data: data })
        } else {
            res.status(200).send({ message: "subject not found" })
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
        const data = await subjectmodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "subject data delete successfull",
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