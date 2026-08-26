import { useState } from "react"
import { Register } from "./register";

export function ConditionalRenderDemo(){
    const[component,setComponent] = useState(nul);

    function handleLoginClick(){
        setComponent(<login/>);
    }
    function handleRegisteClick(){
        setComponent(<Register/>);
    }
    return(
        <div className="container-fluid p-4">
            <h2>Home</h2>
            <button onClick={handleLoginClick} className="btn btn-primary mx-2">Login</button>
            <button onClick={handleRegisteClick} className="btn btn-success">Register</button>
            <hr />
            {component}

        </div>
    )
}