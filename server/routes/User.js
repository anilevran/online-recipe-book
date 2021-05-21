const express = require("express");
const pool = require("../helpers/database");
const router = express.Router();



router.get("/:id",selectUser);

async function selectUser(req,res){
    try{
        const sqlQuery = 'select id, email, password, created_at from user where id=?';
        const rows = await pool.query(sqlQuery,req.params.id);
        console.log(req.params)
        res.status(200).json(rows);
    }catch(err){
        //res.status(400).send(error.message);
        console.log("Error in user js");
    }
}
module.exports = router;