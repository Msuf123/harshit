export default async function postLoginFunc(url,username,password){
  
  const result= await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,password})}).then((res)=>res.json()).then((final)=>{
    console.log('hello')
    return final
  }).catch((e)=>{
    return {success:false}
  })
  return result
}
