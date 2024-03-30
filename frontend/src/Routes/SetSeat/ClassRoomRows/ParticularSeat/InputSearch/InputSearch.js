import { useEffect, useState } from "react"
import style from './inputSearch.module.css'
import { useDispatch, useSelector } from "react-redux"
import searchfetchFunction from "./FetchFunction/searchfetchFunction"
import { addNewData } from "../ParticularSeatSlice"
export default function InputSeat({rowNumber}){
    const url=useSelector((state)=>state.url)
    const [additional,setAdditional]=useState([])
    const seat=useSelector((state)=>state.particularSeat)
    const [code,setCode]=useState(0)
    const [vlaue,setValue]=useState('')
    const [approveFromFrontend,setapproveFromFrontend]=useState(true)
    const diespatch=useDispatch()
    useEffect(()=>{
        
        if(code===200){
            
            const limit=seat.filter((a)=>a.row===rowNumber)
            
            let funa=limit.map((a,k)=>{
                if(k===0){
                   return{...a,studentId:vlaue}
                }
                else{
                    if(additional[k-1]){
                    return{...a,studentId:additional[k-1].uid}
                    }
                    else{
                        return{...a}
                    }
                }
            
            })
            const rest=seat.filter((a)=>a.row!==rowNumber)
            diespatch(addNewData([...funa,...rest]))
        }
        
    },[vlaue])
    return(
        <div className={style.outer}>
        <input placeholder="Uid" vlaue={vlaue} onChange={async (e)=>{
        
            const condtion=seat.some((a)=>a.studentId===e.target.value)
            
            if(!condtion){
            const limit=seat.filter((a)=>a.row===rowNumber)
            const valueFromServer=await searchfetchFunction(`${url}setSeat/searchStudent`,e.target.value,limit.length)
            
            setCode(valueFromServer.msg)
            
            setAdditional(valueFromServer.additional)
        }
           else{
            setCode(500)
           }
            setValue(e.target.value)
        }} ></input>
        <div className={style.main}>
           {code===404?<span style={{color:'red'}}>No user Found</span>:null}
            {code===200?<span style={{color:'green'}}>Username found</span>:null}
            {code===500?<span style={{color:'red'}}>already Booked</span>:null}
        </div>
        </div>
    )
}