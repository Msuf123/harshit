const express=require('express')
const con=require('./connection/connect')
const app=express()
const passport=require('passport')
const session=require('express-session')
const cros=require('cors')
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session)
const passowrdFuncs=require('./encrypt/encrypt')
const bodyParser=require('body-parser')
const sqlStore=new MySQLStore({
host:'localhost',
user:'admin',
password:'admin@123',
database:'harshit'
})
app.use(bodyParser.json())
app.use(cros())

app.use(session({
    secret:'shhh',
    saveUninitialized:false,
    resave:false,
    store:sqlStore
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy((username,password,done)=>{
    con.query('SELECT * FROM student',(err,res)=>{
        if(err){
            done(err)
        }
        if(res.length===0){
            done(null,false)
        }
        if(res.length===1){
            if(passowrdFuncs.compare(password,res[0].password)){
                done(null,res[0])
            }
            else{
                done(null,false)
            }
        }
    })
}))
app.use('/',)
app.listen(3003,()=>{
    console.log('Server up and running ')
    con.query('SELECT * FROM class LIMIT 1;',(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Database connected!!')
            console.log('Test Output ',res)
        }
    })
})
hacktherich