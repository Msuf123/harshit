import { useSelector } from "react-redux";
import ClassRoomNumber from "./ClassRoomNumber/ClassRoomNumber";
import Rows from "./ClassRoomRows/Rows";
import style from './setSeat.module.css'
export default function SetSeat(){
    const row=useSelector((state)=>state.rows)
    return(
        <div>
            
            <ClassRoomNumber></ClassRoomNumber>
            <div className={style.rows}>
                {row.map((i,a)=><Rows rowNumber={i.row}></Rows>)}
            </div>
            <button>Confirm</button>
           
        </div>
    )
}