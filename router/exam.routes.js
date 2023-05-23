const router = require('express').Router();

const {
    register,
    exapupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchviewexam
} = require('../controller/exam.controller');

router.post("/post",register)
router.put("/post/:exam_id",exapupdate)
router.get("/get",Alldataview)
router.get("/get/:exam_id",one_dataview)
router.delete("/delete/:exam_id",deletedata)
router.get("/search",searchviewexam)

module.exports = router