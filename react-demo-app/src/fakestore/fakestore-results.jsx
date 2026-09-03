import { useEffect } from "react";
import { useParams } from "react-router-dom"

export function FakestoreResults(){
    let params = useParams();
    
    useEffect(()=>{
        console.log(params);
    },[]);
    return(
        <div>
            <h3>Search Results</h3>
        </div>
    )
}