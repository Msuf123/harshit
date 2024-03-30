import { useEffect, useState } from 'react'
import InputSeat from './InputSearch/InputSearch'
import style from './seat.module.css'
import { useSelector } from 'react-redux'
export default function ParticularSeat({seat,seatNo,rowNumber}){
    const roomNumber=useSelector((state)=>state.roomNumber)
    const index=useSelector((state)=>state.currentRoomIndex)
    const editable=useSelector((state)=>state.editable)
    const [uid,setUid]=useState(seat)
    const url=useSelector((state)=>state.url)
    const ediatble=useSelector((state)=>state.editable)
    useEffect(()=>{
        if(!ediatble){
            console.log('I am fetching Data and i am in ',seatNo,rowNumber,roomNumber[index].class,'andy my vallue is ',uid)
         fetch(`${url}setSeat/getUids`,{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({roomNumber:roomNumber[index].class})}).then(a=>a.json()).then(
            (b)=>{
                const array=b.msg
               
               function check(e){
                if( e.row===rowNumber&&e.seatno===seatNo&&e.roomno===roomNumber[index].class){
                    
                    setUid(e.studentId)
                }
                return e.row===rowNumber&&e.seatno===seatNo&&e.roomno===roomNumber[index].class
               }
                array.some(check)
                
            }
        )
        
        }
        setUid('')

    },[ediatble,index])
    return(
        <div className={style.main}>
           {seatNo===1&&editable?<InputSeat rowNumber={rowNumber}></InputSeat>:null}
           {ediatble?<span>{seat}</span>:null}
           {!ediatble?<span>{uid}</span>:null}
        </div>
    )
}