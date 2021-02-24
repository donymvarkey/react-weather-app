import React from 'react'

import day from './assets/day.svg'
import night from './assets/night.svg'

export default function DisplayWeather(props) {
    const {temp, description, lat, long, location, isDay, region, country, windSpeed, windDeg, windDir, pressure, precipitation, humidity, img, timeZone} = props.data;

    return (
        <div>
            <div className="container">
                <div className="card mx-auto mt-5 px-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4 px-3">
                                <h1>{temp}<sup>&deg;</sup>C</h1>
                                <h3>{description}</h3>
                                <h4>{location}</h4>
                                <p className="font-weight-normal">{region}, {country}</p>
                                <p className="font-weight-normal">Lat: {lat} <br />Long: {long}</p>
                            </div>
                            <div className="col-md-2 text-center mt-5">
                                <img src={img} alt="weather-img" />
                            </div>
                            <div className="col-md-2 text-center">
                                {
                                   (isDay === 'yes') ? 
                                   <img className="day-night" src={day} alt="day-svg" />
                                   : <img className="day-night" src={night} alt="night-svg" />
                                }
                            </div>
                            <div className="col-md-4 text-right">
                                <h4 className="font-weight-normal">Time Zone</h4>
                                <p>{timeZone}</p>
                            </div>
                        </div>
                        <div className="row pt-3 text-center">
                            <div className="col-md-3">
                                <h5><span className="badge badge-warning badge-pill">Wind Speed</span></h5>
                                <h4>{windSpeed}km/hr {windDeg}<sup>&deg;</sup> {windDir}</h4>
                            </div>
                            <div className="col-md-3 ">
                                <h5><span className="badge badge-secondary badge-pill">Pressure</span></h5>
                                <h4>{pressure}mbar</h4>
                            </div>

                            <div className="col-md-3">
                                <h5><span className="badge badge-primary badge-pill">Precipitation</span></h5>
                                <h4>{precipitation}mm</h4>
                            </div>

                            <div className="col-md-3">
                                <h5><span className="badge badge-success badge-pill">Humidity</span></h5>
                                <h4>{humidity}%</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <div className="row">
                            <div className="col">
                                Powered By: <a href="https://weatherstack.com/" rel="noreferrer" target="_blank">WeatherStack</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
