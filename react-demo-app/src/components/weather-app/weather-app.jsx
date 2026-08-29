import { WeatherDetails } from "./weather-details";

export function WeatherAppDemo(){
    return(
        <div className="container-fluid bg-secondary d-flex justify-content-center align-center">
            <div className="p-4 bg-light w-50 rounded rounded-2">
                <div>
                    <h3 className="text-center bi bi-cloud">WeatherApp</h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="your city name"/>
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                    <div className="mt-4">
                        <WeatherDetails/>
                    </div>
                </div>

            </div>
        </div>
    )
}