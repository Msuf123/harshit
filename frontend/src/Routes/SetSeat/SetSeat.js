import { useDispatch, useSelector } from "react-redux";
import ClassRoomNumber from "./ClassRoomNumber/ClassRoomNumber";
import Rows from "./ClassRoomRows/Rows";
import style from './setSeat.module.css'
import { useEffect, useState } from "react";
import { Tuple } from "@reduxjs/toolkit";
import { change } from "../../Editable/Editable";
export default function SetSeat(){
    const row=useSelector((state)=>state.rows)
    const url=useSelector((state)=>state.url)
    const particularSeat=useSelector((state)=>state.particularSeat)
    const roomNumber=useSelector((state)=>state.roomNumber)
    const index=useSelector((state)=>state.currentRoomIndex)
    const [display,setDisplay]=useState(false)
    const ediatble=useSelector((state)=>state.editable)
    const dispatch=useDispatch()
    useEffect(()=>{
         fetch(`${url}setSeat/allocationRoom`,{method:'POST',credentials:"include",headers:{'Content-Type':'application/json'},
        
        body:JSON.stringify({class:roomNumber[index].class})}).then((a)=>{
         return a.json()
        })
        .then(a=>{
            
    
           dispatch(change(a.msg))
        })
    },[index])
    return(
        <div className={style.main}>
            
            <ClassRoomNumber></ClassRoomNumber>
            <div className={style.rows}>
                {row.map((i,a)=><Rows key={a} rowNumber={i.row}></Rows>)}
            </div>
            <div className={style.hooray}>
            {ediatble?
            <button onClick={async ()=>{
                let array=particularSeat.filter((a)=>a.studentId!==undefined)
               array= array.map((a)=>{
                    return {...a,roomno:roomNumber[index].class}
                })
                console.log(array)
                let result= await fetch(`${url}setSeat/allocation`,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({array:array})}).then((a)=>{
                    setDisplay(true)
                    setTimeout(()=>{
                        setDisplay(false)
                    })
                    return a.json()
                })
                dispatch(change(result.msg))
            }}>Confirm</button>:
            
            <button
            onClick={()=>{

                let result=fetch(`${url}setSeat/allocationDelete`,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({class:roomNumber[index].class})}).then((a)=>{
                    setDisplay(true)
                    setTimeout(()=>{
                        setDisplay(false)
                    })
                    return a.json()
                  }).then((a)=>{
                     dispatch(change(a.msg))
                  })
                
            }}
            >Delete Data and modify</button>}
            </div>
           {display?<div className={style.banner}>
            <span>Respnse Submitted</span>
           </div>:null}
        </div>
    )
}