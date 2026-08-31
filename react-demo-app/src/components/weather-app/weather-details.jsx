import axios from "axios"
import { useEffect, useState } from "react"

export function WeatherDetails(props){
    const[weatherObj,setWeatherObj] = useState({
        weather:[],
        main:{remp:0},
        name:null
    })
    function LoadWeatherData(){
axios.get("https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=cceb07dab58caaa629bfd5c24cd7daba").then(response=>{
            setWeatherObj(response.data);
        })
    }
    useEffect(()=>{
        LoadWeatherData();
    },[props])
    return(
        <div className="bg-light shadow shadow-lg">
            <h4>{weatherObj.name}</h4>
            <div className="fs-1 fw-bold">
                {weatherObj.main.temp}&deg;C
            </div>
            <div>
               {/* {weatherObj.weather[0].} */}
            </div>
        </div>
    )
}