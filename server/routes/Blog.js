const express = require("express");
const pool = require("../helpers/database");
const router = express.Router();


/*async function searchData(req,res){
    try{
        var searchResult = [];
        const sqlQuery = 'select recipe_description from recipes';
        const rows = await pool.query(sqlQuery);
        
        for(var k in rows){
            if(rows[k]['recipe_description'].includes(req.query.search)){
                searchResult.push(rows[k])
                //console.log("if");
                break;
                
            }else{
                //console.log("else");
                continue;
                
            }
        }
        res.status(200).json(searchResult);
        
    }catch(err){
        //res.status(400).send(error.message);
        console.log("Error in blogsearch js");
    }
}*/

async function blogData(req,res){
    try{
        const sqlQuery = 'select recipe_id, created_by, recipe_title, recipe_description, recipe_imagepath from recipes';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        
    }catch(err){
        //res.status(400).send(error.message);
        console.log("Error in blog js");
    }
}


router.use("/",blogData);
//router.get("/:search",searchData);



module.exports = router;