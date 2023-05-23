const router = require('express').Router();

const {
    register,
    attendanceupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchviewexam
} = require('../controller/attendance.controller');

router.post("/post",register)
router.put("/post/:id",attendanceupdate)
router.get("/get",Alldataview)
router.get("/get/:id",one_dataview)
router.delete("/delete/:id",deletedata)
router.get("/search",searchviewexam)

module.exports = router