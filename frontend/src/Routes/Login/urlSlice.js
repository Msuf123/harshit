import { createSlice } from "@reduxjs/toolkit";

const url=createSlice({
    name:'url',
    initialState:'http://localhost:3003/'
})
export default url.reducer