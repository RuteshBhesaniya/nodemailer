const router = require('express').Router();

const {
    register,
    issueupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchviewissue
} = require('../controller/exam.controller');

router.post("/post",register)
router.put("/post/:exam_id",issueupdate)
router.get("/get",Alldataview)
router.get("/get/:exam_id",one_dataview)
router.delete("/delete/:exam_id",deletedata)
router.get("/search",searchviewissue)

module.exports = router