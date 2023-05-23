const router = require('express').Router();

const {
    register,
    subjectupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchviewsubject
} = require('../controller/subject.controller');

router.post("/post",register)
router.put("/post/:id",subjectupdate)
router.get("/get",Alldataview)
router.get("/get/:id",one_dataview)
router.delete("/delete/:id",deletedata)
router.get("/search",searchviewsubject)

module.exports = router