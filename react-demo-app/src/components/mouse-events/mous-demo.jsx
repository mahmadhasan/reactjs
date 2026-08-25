import axios from "axios";
import { useEffect, useState } from "react"

export function MouseDemo(){
    const[mobiles,setMobiles] = useState([{image:null}]);
    const[previewImage,setPreviewImage] = useState('img-1.png');
    function LoadMobiles(){
    axios.get('mobiles.json')
    .then(response=>{
        setMobiles(response.data);
    })
 }
 useEffect(()=>{
    LoadMobiles();
 })

 function handleMouseOver(e){
    setPreviewImage(e.target.src);
 }
    return(
        <div className="container-fluid">
            <div className="row mt-4">

            </div>

            <div className="col-2">
                {
                    mobiles.map(mobile=>
                        <div  key={mobile.image} className="my-4" style={{width:'100px'}}>
                      <img src={mobile.image} onMouseOver={handleMouseOver} width="100" height="100"/>
                        </div>
                    )
                }
            </div>

            <div className="col-10">
                <img width="400px" height="500px" src={previewImage}/>
            </div>

        </div>
    )
}