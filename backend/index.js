const express=require('express')
const con=require('./connection/connect')
const app=express()
const passport=require('passport')
const session=require('express-session')
const cros=require('cors')
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session)
const bodyParser=require('body-parser')
const setSeat = require('./Routes/register')
const sqlStore=new MySQLStore({
host:'localhost',
user:'admin',
password:'admin@123',
database:'harshit'
})
app.use((req,res,next)=>{
    console.log('Incmoomng ')
    next()
})
app.use(bodyParser.json())
app.use(cros({origin:'http://localhost:3000',credentials:true}))

app.use(session({
    secret:'shhh',
    saveUninitialized:false,
    resave:false,
    store:sqlStore
}))
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(user,done)
})
passport.use(new LocalStrategy((username,password,done)=>{
    
    con.query('SELECT * FROM student WHERE uid=?',[username],(err,res)=>{
        if(err){
            done(err)
        }
        if(res.length===0){
            done(null,false)
        }
        if(res.length===1){
            console.log('userFpund')
            if(password===res[0].password){
                done(null,res[0])
            }
            else{
                done(null,false)
            }
        }
    })
}))
app.post('/login',passport.authenticate('local'),(req,res,next)=>{
  res.send({success:true,role:req.user.isAdmin})
})

app.use('/setSeat',setSeat)
app.listen(3003,async ()=>{
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
