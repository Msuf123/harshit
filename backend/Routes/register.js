const express=require('express')
const con=require('../connection/connect')
const encryptFunctions=require('../encrypt/encrypt')
const passport = require('passport')
const setSeat=express.Router()

setSeat.get('/seats',(req,res,next)=>{

})
setSeat.get('/classRoomNumbers',(req,res,next)=>{
    con.query('SELECT DISTINCT class FROM class;',(err,result)=>{
        if(err){
            res.send({success:false,result:err})
        }
        else{
            console.log(result)
            res.send({success:true,msg:result})
        }
    })
})
setSeat.post('/classRowNumber',(req,res,next)=>{
    
    
    con.query('SELECT DISTINCT row FROM class WHERE class=?;',[req.body.class],(err,result)=>{
        if(err){
            res.send({success:false,result:err})
        }
        else{
            console.log(result)
            res.send({success:true,msg:result})
        }
    })
})
setSeat.post('/classSeat')
module.exports=setSeat