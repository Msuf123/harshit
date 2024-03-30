const bcrypt=require('bcrypt')
async function encrypt(password){
    console.log(password)
try{
const salt=  bcrypt.genSalt(2)
const encrypted= bcrypt.hash(password,10)
console.log(encrypted)
return encrypted
}
catch(e){
    console.log(e)
    return null
}
}
async function compare(password,encrypt){
    const result= await bcrypt.compare(password,encrypt)
    console.log(result)
    return result
}
module.exports={encrypt,compare}