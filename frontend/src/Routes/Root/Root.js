import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div>
        <h1 style={{textAlign:'center'}}>Student Exarm Sitting Allocation</h1>
        <Outlet></Outlet>
        </div>
    )
}