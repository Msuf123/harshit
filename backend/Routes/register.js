const express=require('express')
const con=require('../connection/connect')
const encryptFunctions=require('../encrypt/encrypt')
const register=express.Router()
register.post('/',async (req,res,next)=>{
  const{uid,password}=req.body
  const encryptedPassword=await encryptFunctions.encrypt(password)
  con.query('INSERT INTO student(uid,password,isAdmin) VALUES(?,?,true)',[uid,encryptedPassword],(err,status)=>{
   if(err){
    res.status(500).send('Error')
   }
   else{
    res.send({sucess:true})
   }
  })
})