import { createSlice } from "@reduxjs/toolkit";
import getRows from "./getRows";

const rowSlice=createSlice({
    name:'row',
    initialState:[{row:1},{row:2}],
    extraReducers:(bulider)=>{
        bulider.addCase(getRows.fulfilled,(state,action)=>{
            return action.payload.msg
        })
    }

})
export default rowSlice.reducer