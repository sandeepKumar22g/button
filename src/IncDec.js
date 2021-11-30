import React, { useState } from 'react'
import "./IncDec.css"
const IncDec = () => {


    const [count, setCount] = useState(0)
    const inc =() =>{
        setCount(count+1)
    }
    const dec=()=>{
        if(count===0){
        alert("You can't decrease now")
        }else if(count>0){
            setCount(count-1)
        }
    }

    return (
        <>
            <div className='main'>
                <div className='center'>
                    <h1>{count}</h1>
                    <button onClick={inc}>Inc</button>
                    <button onClick={dec}>Dec</button>
                </div>

            </div>
        </>
    )
}

export default IncDec
