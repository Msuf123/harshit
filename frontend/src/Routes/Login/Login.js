import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import postLoginFunc from "./customFunction"
import { useNavigate } from "react-router-dom"
import ReactLoading from 'react-loading';
import ErrorComp from "./Error/Error";
export default function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState(false)
    const nav=useNavigate()
    const url=useSelector((state)=>state.url)
   
    return(
        <div>
            <h3>Login</h3>
            <input placeholder="uid" value={username} onChange={(e)=>{
                 setUsername(e.target.value)
            }}></input>
            <input placeholder="password" value={password}  onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <button onClick={async()=>{
                setLoader(true)
                const response=await postLoginFunc(`${url}login`,username,password)
                if(response.role===0){
                 nav('/getSeat')
                }
                else if(response.role===1){
                   nav('/admin')
                }
            
                else{
                    setLoader(false)
                    setError(true)
                    setTimeout(()=>{setError(false)},4000)
                }
            }}>Login</button>
            
            {loader?<ReactLoading type="spin"></ReactLoading>:null}
            {error?<ErrorComp></ErrorComp>:null}
        </div>
    )
}