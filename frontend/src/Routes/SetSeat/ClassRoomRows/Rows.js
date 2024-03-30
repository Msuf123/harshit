import { useSelector } from "react-redux";
import ParticularSeat from "./ParticularSeat/ParticularSeat";
import { useEffect } from "react";

export default function Rows({rowNumber}){
    const seat=useSelector((state)=>state.particularSeat)
    const roomNumber=useSelector((state)=>state.roomNumber)
    useEffect(()=>{
        console.log(roomNumber)
    })
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <span>Row {rowNumber}</span>
           {seat.map((i,t)=>i.row===rowNumber?<ParticularSeat seat={i.studentId} rowNumber={rowNumber} key={t} seatNo={i.seatno}></ParticularSeat>:null)}
        </div>
    )
}