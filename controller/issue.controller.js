const issuemodel = require('../model/issue.model');

exports.register = async (req, res) => {
    const issue_id = `issue${Math.floor(1000 + Math.random() * 9000)}`
    console.log(issue_id);
    try {
        const data = new issuemodel({
            _id: issue_id,
            type: req.body.type,
            details: req.body.details,
            Is_resolved:req.body.Is_resolved
        })
        const result = await data.save();

        res.status(201).json({
            message: "issue Data Register successfull",
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

exports.issueupdate = async (req, res) => {

    const issue_id = `issue${Math.floor(1000 + Math.random() * 9000)}`
    console.log(issue_id);

    try {
        const data = await issuemodel.findByIdAndUpdate({
        _id: req.params._id
        }, {
            $set: {
                _id: issue_id,
                type: req.body.type,
                details: req.body.details,
                Is_resolved:req.body.Is_resolved
            }
        })

        const result = await data.save()

        res.status(200).json({
            message: "issue data update successfull",
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
    const checkid = await issuemodel.findOne({_id:_id })
    try {
        if (checkid) {
            const data = await issuemodel.findById({_id: req.params._id })

            res.status(200).json({
                message: "issue data view successfull",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "issue data is not exited",
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
        const data = await issuemodel.find({})

        res.status(200).json({
            message: "issue All Data View",
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

exports.searchviewissue = async (req, res) => {
    try {
        const name = req.body.name

        const data = await issuemodel.find({ "name": { $regex: ".*" + name + ".*" } })

        if (data.length > 0) {
            res.status(200).send({ message: "issue detail", data: data })
        } else {
            res.status(200).send({ message: "issue not found" })
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
        const data = await issuemodel.findByIdAndDelete({ _id: req.params._id })

        res.status(200).json({
            message: "issue data delete successfull",
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