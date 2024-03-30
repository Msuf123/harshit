import { useSelector } from "react-redux";
import ClassRoomNumber from "./ClassRoomNumber/ClassRoomNumber";
import Rows from "./ClassRoomRows/Rows";
import style from './setSeat.module.css'
export default function SetSeat(){
    const row=useSelector((state)=>state.rows)
    const particularSeat=useSelector((state)=>state.particularSeat)
    return(
        <div>
            
            <ClassRoomNumber></ClassRoomNumber>
            <div className={style.rows}>
                {row.map((i,a)=><Rows key={a} rowNumber={i.row}></Rows>)}
            </div>
            <button onClick={()=>{
                console.log(particularSeat)
            }}>Confirm</button>
           
        </div>
    )
}