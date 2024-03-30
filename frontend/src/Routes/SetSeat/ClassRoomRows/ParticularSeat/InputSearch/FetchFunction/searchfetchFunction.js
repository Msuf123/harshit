export default async function searchFetch(url,value,limit){
    const result=await fetch(url,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'}
,body:JSON.stringify({value:value,limit:limit})
}).then(res=>res.json())
console.log(result)
return result
}