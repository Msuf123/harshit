import { useEffect } from 'react'
import InputSeat from './InputSearch/InputSearch'
import style from './seat.module.css'
export default function ParticularSeat({seat,seatNo,rowNumber}){
    useEffect(()=>{
        console.log(seat,seatNo,rowNumber)
    })
    return(
        <div className={style.main}>
           {seatNo===1?<InputSeat rowNumber={rowNumber}></InputSeat>:null}
           <span>{seat}</span>
        </div>
    )
}