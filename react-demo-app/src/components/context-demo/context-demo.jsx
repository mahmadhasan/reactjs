import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level1(){
    let context = useContext(UserContext);
    return(
        <div className="bg-dark text-white p-4">
            <h3>Level-1 Hello !! {context}</h3>
             <Level2 />
        </div>
    )
}
export function Level2(){
        let context = useContext(UserContext);

    return(
        <div className="bg-warning text-white p-4">
            <h3>Level-2 Bye!! {context}</h3>
        </div>
    )
}

export function ContextDemo(){
    const[uName,setUname] =useState('');

    function handleNameChange(e){
        setUname(e.target.value);
    }
    return(
        <div className="container-fluid p-4 bg-danger text-white">
            <h3>Parent Component <input onChange={handleNameChange} type="text" placeholder="User Name" /></h3>
            <userContext value={uName}>
                Level1
            </userContext>
        </div>
    )
}