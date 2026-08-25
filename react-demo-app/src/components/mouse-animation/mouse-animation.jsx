import { useState } from 'react';
import './mouse-animation.css';

export function MouseAnimation(){
     const[animationObject,setAnimationObject]=useState({animationName:'Spin',animationDuration:'3s',animationIterationCount:'infinite',animationTimingFunction:'linear'});
    
    function handleMouseDown(){
    setAnimationObject({animationName:'Spin',animationDuration:'500ms',animationIterationCount:'infinite',animationTimingFunction:'linear'});

    }

    function handleMouseUp(){
    setAnimationObject({animationName:'Spin',animationDuration:'3s',animationIterationCount:'infinite',animationTimingFunction:'linear'});

    }
     return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
        <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}  src="react.svg" width="100" height="100" style={animationObject}/>

        </div>
    )

}