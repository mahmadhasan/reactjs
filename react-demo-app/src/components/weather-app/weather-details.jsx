import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CityContext } from "./weather-app"

export function WeatherDetails(){
    const[weatherObj,setWeatherObj] = useState({
        weather:[],
        main:{remp:0},
        name:null
    })

    let context = useContext(CityContext);

    function LoadWeatherData(){
axios.get("https://api.openweathermap.org/data/2.5/weather?q=${context}&appid=cceb07dab58caaa629bfd5c24cd7daba").then(response=>{
            setWeatherObj(response.data);
        })
    }
    useEffect(()=>{
        LoadWeatherData();
    },[context])
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