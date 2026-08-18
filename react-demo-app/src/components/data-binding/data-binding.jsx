import { useState } from "react"

export function DataBinding(){
//    var userName ="Baba";
const [getPrice,setPrice] = useState(4500000.000);
    return(
        <div className="control-fluid">

            {/* <h2>Data-Binding</h2>
            <p>Hello ! {userName}</p> */}
            
            <p>Price={getPrice}</p>

        </div>
    )
}