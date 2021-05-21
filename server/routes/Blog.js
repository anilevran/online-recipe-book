const express = require("express");
const router = express.Router();

router.get("/Blog",(req,res,next) => res.send("Blog Page"));

module.exports = router;