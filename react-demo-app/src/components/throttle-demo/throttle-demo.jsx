import { useEffect, useRef, useState } from "react"

export function  ThrottleDemo() {
   // const[hours,setHours] = useState(0);
    //const[mtns ,setMtns] = useState(0);
    const[milliSeconds,setMilliSeconds] = useState(0);
    const[seconds,setSeconds] = useState(0);
    let th = useRef(null);
    let ms =0, sec=0, min=0;//hrs=0;
    
   function StartWatch(){
        ms++;
       if(ms===999){
          ms = 0;
          sec++;
          if(sec ===59){
            min++;
             sec=0;
          }
       }
       setMilliSeconds(ms);
       setSeconds(sec);
   }

   function handelStartClick(){
    th.current = setInterval(StartWatch,1);
   }
    function handleStopWatch(){
     clearInterval(th.current);
   }

    return(

        <div className="container-fluid text-center p-4">
            <div className="bg-primary  text-white fw-bold fs-1  w-50 p-4 row">
                <div className="col-2">
                    {/* {hours} */}
                </div>
                <div className="col-2">
                   :
                </div>
                <div className="col-2">
                   {/* {mtns} */}
                </div>
                <div className="col-2">
                    :
                </div>

                <div className="col-2">
                    {seconds}
                </div>

                <div className="col-2">
                    :
                </div>
                <div className="col-2">
                  {milliSeconds}
                </div>
                 <div className="mt-3 fs-5">
                <button onClick={handelStartClick} className="btn btn-light">start</button>
                <button onClick={handleStopWatch} className="btn btn-light mx-2">stop</button>
            </div>
            </div>
           
        </div>
        // <div className="container-fluid text-center">
        //     <div className="h1">{now.toLocaleTimeString()}</div>
        // </div>
    )
}