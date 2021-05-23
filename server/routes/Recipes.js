const express = require("express");
const pool = require("../helpers/database");
const router = express.Router();


async function recipesData(req,res){
    try{
        const sqlQuery = 'select recipe_id, created_by, recipe_title, recipe_description, recipe_imagepath from recipes';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        
    }catch(err){
        //res.status(400).send(error.message);
        console.log("Error in blog js");
    }
}
router.get("/",recipesData);

module.exports = router;