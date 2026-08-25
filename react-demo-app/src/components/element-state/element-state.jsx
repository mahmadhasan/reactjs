import { useState } from "react"

export function ElementState(){

    const[userName,setUserName] = useState('');

    const[msg,setMsg] = useState('');

    function handleNameBlur(){
        setUserName(userName.toUpperCase());

        setMsg('');

    }
    
    function handleNameFocus() {
        setMsg('UserName in Block Letters');
    }

    function handleNameChange(e){
      setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>User Registration</h2>
       <dl className="ms-4">
         <dt>UserName</dt>
         <dd><input type="text" value={userName} onFocus={handleNameFocus} onChange={handleNameChange} onBlur={handleNameBlur} placeholder="UserName in Block Letters" /></dd>
       <dd className="text-warning fs-4">{msg}</dd>
       </dl>

        </div>
    )
}