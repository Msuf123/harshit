import { createSlice } from "@reduxjs/toolkit";

const firstColumnOfEachrow=createSlice({
    name:'firstColumnOfEachrow',
    initialState:[],
    reducers:{
        addStudent:(state,action)=>{
            return [...state,action.payload]
        }
    }
})
export default firstColumnOfEachrow.reducer