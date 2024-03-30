import { createSlice } from "@reduxjs/toolkit";
import getRoomNumer from "./fetchThunkRoomNumber";

const roomNumber=createSlice({
    name:'roomNumber',
    initialState:[ { class: 208 }, { class: 209 } ],
    extraReducers:(bulider)=>{
        bulider.addCase(getRoomNumer.fulfilled,(state,action)=>{
           return action.payload.msg
        })
    }
})
export default roomNumber.reducer