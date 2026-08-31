import { useState } from "react";
import { WeatherDetails } from "./weather-details";

export function WeatherAppDemo(){
    const[cityName,setCityName] = useState('');
    const[searchCity,setSearchCity] = useState('');
    const[toggleDetails,setToggleDetails] = useState('d-none');
    function handleCityChange(e){
        setCityName(e.targer.value);
    }

    function handleSearchClick(){
        setSearchCity(cityName);
        setToggleDetails('d-block')
    }
    return(
        <div className="container-fluid bg-secondary d-flex justify-content-center align-center">
            <div className="p-4 bg-light w-50 rounded rounded-2">
                <div>
                    <h3 className="text-center bi bi-cloud">WeatherApp</h3>
                    <div className="input-group">
                        <input onChange={handleCityChange} type="text" className="form-control" placeholder="your city name"/>
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                    <div className="mt-4 ${toggleDetails}">
                        <WeatherDetails searchCity={searchCity}/>
                    </div>
                </div>

            </div>
        </div>
    )
}