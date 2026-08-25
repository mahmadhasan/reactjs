import { useState } from "react"

export function MouseMove(){
    const[styleObject,setStyleObject] = useState({position:'fixed',top:'',left:''});

    function handleMouseMove(e){
         setStyleObject({position:'fixed',top:'${e.clientY}px',left:'${e.clientX}px'});
    }

return(
    <div onMouseMove={handleMouseMove}>
        <div style={{height:'1000px'}}>
            <p className="fs-2">Move Mouse Pointer to Test</p>
        </div>
        <img src="img-1.png" style={styleObject} width="50" height="50"/>
    </div>
)

}