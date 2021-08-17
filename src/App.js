import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import Weather from "./app_component/weather.components" ;

const API_KEY = 'fa5986850b77c807610cdc0a2048fe8d';
const cityname = 'Bangalore';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city : undefined,
      country : undefined,
      celsius : undefined,
      mintemp : undefined,
      maxtem : undefined
    };
    this.getWeather();
  }
  getWeather = async () =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`);
    const response = await api_call.json();

    console.log(response);

  }
  render(){
    return( <div className="App">
    <Weather city = {this.state.city} country = {this.state.country}/>
      </div>

    );
  }
}



export default App;
