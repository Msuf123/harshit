import { createSlice } from "@reduxjs/toolkit";
import getEditable from "./editThunk";
import { act } from "react-dom/test-utils";

const editable=createSlice({
    name:'editable',
    initialState:true,
    reducers:{
        change:(state,action)=>{
            return action.payload
        }
    },
    extraReducers:(bulider)=>{
        bulider.addCase(getEditable.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})
export const {change}=editable.actions
export default editable.reducer