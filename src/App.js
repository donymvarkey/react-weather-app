import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'
import NavBar from './components/NavBar'
import DisplayWeather from './components/DisplayWeather'

export default class App extends Component {
  state = {
    coords: {
      lat: 45,
      long: 60
    },
    weather: {},
    inputData: ""
  }
 
  componentDidMount() {
    //Get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
        this.setState({
          coords: newCoords
        })

        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${this.state.coords.lat},${this.state.coords.long}`)
        .then(res => {
          let weatherData = {
            location: res.data.location.name,
            lat: res.data.location.lat,
            long: res.data.location.lon,
            timeZone: res.data.location.timezone_id,
            description: res.data.current.weather_descriptions[0],
            temp: res.data.current.temperature,
            region: res.data.location.region,
            country: res.data.location.country,
            windSpeed: res.data.current.wind_speed,
            windDeg: res.data.current.wind_degree,
            windDir: res.data.current.wind_dir,
            pressure: res.data.current.pressure,
            precipitation: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
            isDay: res.data.current.is_day
          }

          this.setState({
            weather: weatherData
          })
        })
      })
    }
  }

  change = (query) => {
    this.setState({
      inputData: query
    })
  }

  changeWeather = (event) => {
    event.preventDefault()
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${this.state.inputData}`)
    .then(res => {
      let weatherData = {
        location: res.data.location.name,
        lat: res.data.location.lat,
        long: res.data.location.lon,
        timeZone: res.data.location.timezone_id,
        description: res.data.current.weather_descriptions[0],
        temp: res.data.current.temperature,
        region: res.data.location.region,
        country: res.data.location.country,
        windSpeed: res.data.current.wind_speed,
        windDeg: res.data.current.wind_degree,
        windDir: res.data.current.wind_dir,
        pressure: res.data.current.pressure,
        precipitation: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
        isDay: res.data.current.is_day
      }

      this.setState({
        weather: weatherData
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar changeRegion={this.change} changeWeather={this.changeWeather} />
        <DisplayWeather data={this.state.weather} />
      </div>
    )
  }
}

