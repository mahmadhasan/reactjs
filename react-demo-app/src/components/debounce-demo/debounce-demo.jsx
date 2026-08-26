import { useRef, useState } from "react"

 export function DebounceDemo(){
     const[msg,setMsg] = useState('');
     let th = useRef(null);
    function Level1(){
        setMsg('Volume Increased...');

    }
     function Level2(){
        setMsg('Volumed increased : 20%');
    }
     function Level3(){
        setMsg('Volume si Full');
    }

    function VolumeUpClick(){
    //   Level1(l);
    //   Level2();
    //   Level3();
    setTimeout(Level1,3000);
    // setTimeout(Level2,6000);
    th.current = setTimeout(Level2,6000);
    setTimeout(Level3,9000);
    }

function handleCancelClick(){
    alert('Cancled');
    clearTimeout(th.current);
}

return(
    <div className="container-fluid p-4">
        <button onClick={VolumeUpClick} className="btn btn-warning bi bi-volume-up"></button>
        <button  onClick={handleCancelClick} className="btn btn-danger mx-2">Cancel Level2</button>

        <p className="fs-4">{msg}</p>

    </div>
)

 }