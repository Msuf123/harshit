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
setSeat.post('/getUids',(req,res,next)=>{
    console.log(req.body.roomNumber,'Hello this is te com number')
    con.query('SELECT * FROM allocation WHERE roomno=?; ',[req.body.roomNumber],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({sucess:true,msg:result})
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
setSeat.post('/allocationRoom',(req,res,next)=>{
    console.log(req.body)
    con.query('SELECT * FROM allocation WHERE roomno=?;',[req.body.class],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result.length===0){
                res.send({success:true,msg:true})
            }
            else{
                res.send({success:true,msg:false})
            }
        }
    })
})
setSeat.post('/allocationDelete',(req,res,next)=>{
    con.query('DELETE  FROM allocation WHERE roomno=?;',[req.body.class],(err,result)=>{
        if(err){
            console.log(err)
            res.send({success:true,msg:false})
        }
        else{
            
                res.send({success:true,msg:true})
            
            
        }
    })
})
setSeat.post('/allocation',(req,res,next)=>{
    const data=req.body.array
    console.log('Inserting data')
    data.map((a)=>{
    con.query('INSERT INTO allocation (row,seatno,roomno,studentId) VALUES(?,?,?,?);',[a.row,a.seatno,a.roomno,a.studentId],(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
})
res.send({success:true,msg:false})
})
setSeat.post('/searchStudent',(req,res,next)=>{
    const student=req.body.value
    const limit=req.body.limit
    con.query('SELECT uid FROM student WHERE uid=?',[student],(err,result)=>{
       
        if(err){
            
            res.send({success:false,msg:err})
        }
        if(result.length===0){
            console.log(result)
            res.send({success:true,msg:404})
        }
        if(result.length!==0){
            
            con.query('SELECT studentId FROM allocation WHERE studentId=?',[student],(err,resultTwo)=>{
              if(err){

                res.send({success:false,msg:err})
              }
              if(resultTwo.length!==0){
                console.log(resultTwo)
                res.send({success:true,msg:500})
              }
              if(resultTwo.length===0){
            

                    let like = '';

                    for (let i = 2; i < 5; i++) {
                    like += student[i];
                    }
                
                con.query('SELECT uid FROM student WHERE uid>? AND uid LIKE ? LIMIT ?',[student,`%${like}%`,limit],(err3,result3)=>{
                    if(err3){
                        res.send({success:false,msg:404})
                    }
                    else{
                        console.log(result3)
                        res.send({success:true,msg:200,additional:result3})
                    }
                })
                
              }
            })
        }
    })
})
setSeat.post('/classRowSeat',(req,res,next)=>{
    
    
    con.query('SELECT DISTINCT row,seatno FROM class WHERE class=?;',[req.body.class],(err,result)=>{
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