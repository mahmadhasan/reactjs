import { useState } from 'react'
import {ChildComponentDemo} from './childcomponent'

export function ParentDemo(){
    const[msg,setMsg] =useState('waiting for data from child');

    function handleChildComponentClick(e){
        setMsg(e);
    }

    return(
        <div className="container-fluid  text-white bg-danger p-4">
            <h3>ParentComponent - {msg}</h3>
            <ChildComponentDemo onChildClick={handleChildComponentClick}/>
        </div>
    )
}