import React, { useState } from 'react'
import "./IncDec.css";
import {PlusOne, Remove } from '@material-ui/icons';
import { Button, Tooltip } from '@material-ui/core';



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
                    <Tooltip title="Add">
                    <Button  onClick={inc} color="primary" variant="outlined" style={{marginLeft:'10px', marginRight: '5px' }}> <PlusOne/> </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button onClick={dec} color="secondary" variant="outlined" style={{marginLeft:'5px', marginRight: '10px'}}> <Remove /> </Button>
                    </Tooltip>
                </div>

            </div>
        </>
    )
}

export default IncDec
