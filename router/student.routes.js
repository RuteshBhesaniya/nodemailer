const router = require('express').Router();

const {
    register,
    Studentupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchview
} = require('../controller/student.controller');

router.post("/post",register)
router.put("/post/:id",Studentupdate)
router.get("/get",Alldataview)
router.get("/get/:id",one_dataview)
router.delete("/delete/:id",deletedata)
router.get("/search",searchview)

module.exports = router