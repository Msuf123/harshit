const bcrypt=require('bcrypt')
async function encrypt(password){
try{
const salt=  bcrypt.getRounds(2)
const encrypted=await bcrypt.hash(password,salt)
return encrypt
}
catch(e){
    console.log(e)
    return null
}
}
async function compare(password,encrypt){
    const result= bcrypt.compare(password,encrypt)
    return result
}
module.exports={encrypt,compare}