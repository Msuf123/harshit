import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getRoomNumer from "./fetchThunkRoomNumber"
import style from './classRoom.module.css'
import getRows from "../ClassRoomRows/getRows"
import getSeats from "../ClassRoomRows/ParticularSeat/ParticularSeatThunk"
import { changeIndex } from "./IndexOfRoom"
export default function ClassRoomNumber(){
    const [index,setIndex]=useState(0)
    const [error,setError]=useState(false)
    const url=useSelector((state)=>state.url)
    let currentSeat=useSelector((state)=>state.roomNumber)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getSeats({url:`${url}setSeat/classRowSeat`,roomNumber:currentSeat[0]}))
      dispatch(getRoomNumer({url:`${url}setSeat/classRoomNumbers`}))
      dispatch(getRows({url:`${url}setSeat/classRowNumber`,roomNumber:currentSeat[0]}))
      
    },[])
    return(
        <div className={style.main}>
            <div className={style.flexs}>
                    <button onClick={()=>{
                    if(currentSeat[index+1]===undefined){
                        setTimeout(()=>{setError(false)},3000)

                        setError(true)
                    }
                    else{
                    dispatch(changeIndex(index+1))
                    setIndex((number)=>number+1)
                    }
                    }}>+</button>
                <span>{currentSeat[index].class}</span>
                <button onClick={()=>{
                    if(currentSeat[index-1]===undefined){
                        setTimeout(()=>{setError(false)},3000)
                        setError(true)
                    }
                    else{
                    setIndex((number)=>number-1)
                    dispatch(changeIndex(index-1))
                    }
                }}>-</button>
           </div>
           
           {error?<span>No more CalssRoomNumber</span>:null}
        </div>
    )
}