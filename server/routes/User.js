const express = require("express");
const pool = require("../helpers/database");
const router = express.Router();


router.get("/",biseylerUser);
router.get("/:id",selectUser);

function biseylerUser(req,res){
    console.log("hadi da")
}

async function selectUser(req,res){
    try{
        const sqlQuery = 'select user_id, user_name, email, password, created_at from user where user_id=?';
        const rows = await pool.query(sqlQuery,req.params.id);
        res.status(200).json(rows);
        
    }catch(err){
        //res.status(400).send(error.message);
        console.log("Error in user js");
    }
}
module.exports = router;