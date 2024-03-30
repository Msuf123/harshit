import { createAsyncThunk } from "@reduxjs/toolkit";

const getEditable=createAsyncThunk('getEditable',async({url,room},thunkApi)=>{
   const result=await fetch(url,{credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({room:room}),method:'POST'})
   console.log(result)
   return result
})
export default getEditable