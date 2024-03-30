import ParticularSeat from "./ParticularSeat/ParticularSeat";

export default function Rows({rowNumber}){
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <span>Row {rowNumber}</span>
           <ParticularSeat seat={null}></ParticularSeat>
        </div>
    )
}