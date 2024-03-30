import style from './seat.module.css'
export default function ParticularSeat({seat}){
    return(
        <div className={style.main}>
            <input></input>
           <span>{seat}</span>
        </div>
    )
}