import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getRoomNumer from "./fetchThunkRoomNumber"

export default function ClassRoomNumber(){
    const [index,setIndex]=useState(0)
    const [error,setError]=useState(false)
    const url=useSelector((state)=>state.url)
    let currentSeat=useSelector((state)=>state.roomNumber)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getRoomNumer({url:`${url}setSeat/classRoomNumbers`}))
      console.log(currentSeat)
    },[])
    return(
        <div>
            <button onClick={()=>{
              if(currentSeat[index+1]===undefined){
                setTimeout(()=>{setError(false)},3000)
                setError(true)
              }
              else{
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
              }
           }}>-</button>
           {error?<span>No more CalssRoomNumber</span>:null}
        </div>
    )
}