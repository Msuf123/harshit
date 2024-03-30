import { createAsyncThunk } from "@reduxjs/toolkit";

const getRoomNumer=createAsyncThunk('fetchRoomNumber',async({url},thunkApi)=>{
  const response= await fetch(url,{credentials:'include'}).then((e)=>{
        return e.json()
    })
    return response
})
export default getRoomNumer