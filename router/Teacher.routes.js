const router = require('express').Router();

const {
    register,
    Teacherupdate,
    one_dataview,
    Alldataview,
    deletedata,
    searchviewteacher
} = require('../controller/Teacher.controller');

router.post("/post",register)
router.put("/post/:id",Teacherupdate)
router.get("/get",Alldataview)
router.get("/get/:id",one_dataview)
router.delete("/delete/:id",deletedata)
router.get("/search",searchviewteacher)

module.exports = router