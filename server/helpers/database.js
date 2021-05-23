const dotenv = require("dotenv");
const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5
});
pool.getConnection()
    .then(conn => {
    

        //Veri Ekleme--Veri Cevabı--Veri hata döndürdü mü
      /*conn.query("SELECT id from user")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })*/
        
        //Connection Hatası 
    }).catch(err => {
      console.log(err)
    });

module.exports = pool;