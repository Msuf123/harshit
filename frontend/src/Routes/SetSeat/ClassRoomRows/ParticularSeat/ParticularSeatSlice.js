import { createSlice } from "@reduxjs/toolkit";
import getSeats from "./ParticularSeatThunk";

const particularSeat=createSlice({
    name:'particularSeat',
    initialState:[{row:1,seatno:1},{row:2,seatno:1},{row:1,seatno:2}],
    reducers:{
        addNewData:(state,action)=>{
            return action.payload
        }
    },
    extraReducers:(bulider)=>{
        bulider.addCase(getSeats.fulfilled,(state,action)=>{
            return action.payload.msg
        })
    }
})
export const {addNewData}=particularSeat.actions
export default particularSeat.reducer