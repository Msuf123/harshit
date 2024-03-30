import { createAsyncThunk } from "@reduxjs/toolkit";

const getRows=createAsyncThunk('getRows',({url,roomNumber})=>{
    const result=fetch(url,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify(roomNumber)})
    .then((a)=>a.json())
    return result
})
export default getRows