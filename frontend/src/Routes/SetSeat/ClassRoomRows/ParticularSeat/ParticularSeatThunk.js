import { createAsyncThunk } from "@reduxjs/toolkit";

const getSeats=createAsyncThunk('getSeats',({url,roomNumber})=>{
    const result=fetch(url,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify(roomNumber)})
    .then((a)=>a.json())
    console.log(result)
    return result
})
export default getSeats