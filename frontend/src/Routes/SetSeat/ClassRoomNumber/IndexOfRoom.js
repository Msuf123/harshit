import { createSlice } from "@reduxjs/toolkit";

const index=createSlice({
    name:'Index',
    initialState:0,
    reducers:{
        changeIndex:(state,action)=>{
             return action.payload
        }
    }
})
export const{changeIndex}=index.actions
export default index.reducer