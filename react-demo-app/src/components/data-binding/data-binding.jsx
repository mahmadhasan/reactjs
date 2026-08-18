import { useEffect, useState } from "react"

export function DataBinding(){
//    var userName ="Baba";
const [getPrice,setPrice] = useState(4500000.000);
const[name,setName] = useState('please set name');
const[views,setView] = useState(0);
useEffect(()=>{
    setPrice(4000);
    setName("Baba");
    setView(670148)
},[]);
    return(
        <div className="control-fluid">

            {/* <h2>Data-Binding</h2>
            <p>Hello ! {userName}</p> */}
            
            <p>Price={getPrice}</p>
            <p>{name}</p>
            <p className="bi bi-eye-fill">{views.toLocaleString('en-us',
                {notation:'compact'})} views</p>
        </div>
    )
}