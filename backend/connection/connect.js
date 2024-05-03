const mysql2=require('mysql2')
const con=mysql2.createPool({
    host:'',
    password:'',
    user:'',
    connectionLimit:10,
    connectTimeout:100,
    waitForConnections:true,
    maxIdle:2,
    idleTimeout:300,
    database:'harshit'
})
module.exports=con
