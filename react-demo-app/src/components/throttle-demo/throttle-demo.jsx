import { useEffect, useRef, useState } from "react"

export function  ThrottleDemo() {
    //const[now,setNow] = useState(new Date());

    // function LoadTime(){
    //     setNow(new Date());
    // }

// useEffect(()=>{
//     // LoadTime();
//     // setTimeout(LoadTime,1000);
//     setInterval(LoadTime,1000);
// },[])

   const[hrs,setHrs] = useState(0);
   const[mtns ,setMtns] = useState(0);
   const[sec,setSec] = useState(0);
   const[ms,setMs] = useState(0);
    let th = useRef(null);
    
   function StartWatch(){
    var milliSeconds =0;
    var seconds=0;
    var minutes =0;
        //ms++;
        milliSeconds++;
        setMs(milliSeconds);
        milliSeconds = 0;

        if(ms===999){
            setMs(0);
            //sec++;
            seconds++;
            setSec(seconds);
            if(sec===59){
                setSec(0);
                //mtns++;
                minutes++;
                setMtns(minutes);
                // if(mtns===59){
                //     setMtns(0);
                //     hrs++;
                //     if(hrs===24){
                //         setHrs(0);
                //     }
                // }

            }
        }
   }

   function handelStartClick(){
    th.current = setInterval(StartWatch,1);
   }
    //function stopWatch(){
   // }

    return(

        <div className="container-fluid text-center p-4">
            <div className="bg-primary  text-white fw-bold fs-1  w-50 p-4 row">
                <div className="col-2">
                    :
                </div>
                <div className="col-2">
                    {hrs}
                </div>
                <div className="col-2">
                    :
                </div>
                <div className="col-2">
                    {mtns}
                </div>

                <div className="col-2">
                    :
                </div>

                <div className="col-2">
                    {sec}
                </div>
                 <div className="mt-3 fs-5">
                <button onClick={handelStartClick} className="btn btn-light">start</button>
                <button className="btn btn-light mx-2">stop</button>
            </div>
            </div>
           
        </div>
        // <div className="container-fluid text-center">
        //     <div className="h1">{now.toLocaleTimeString()}</div>
        // </div>
    )
}