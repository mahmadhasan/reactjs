import { useEffect, useState } from "react"

export function FakestoreDetails(){
    const[details,setDetails] = useState();

    let params = useParams();

    useEffect( (response)=>{
    setDetails(response.data);
    }
        
    ,[params.id])
    return(
        <div className="container-fluid">

        </div>
    )
}