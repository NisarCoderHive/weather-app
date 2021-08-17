import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import Weather from "./app_component/weather.components" ;

import Form from "./app_component/form.component";

const API_KEY = 'fa5986850b77c807610cdc0a2048fe8d';
//const cityname = 'Bangalore';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };
    
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
// defactor  city and country b
getCityCountry = event =>{
  event.preventDefault();
  
  const country = event.target.elements.country.value;
  const city = event.target.elements.city.value;
  this.getWeather(country,city)

}
getWeather = async (country,city) => {
   

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );

      const response = await api_call.json();

      this.setState({
        city: response.name,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      
      //this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Form loadweather={this.getCityCountry} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          // weatherIcon={this.state.icon}
          country={this.state.country}
          celsius={this.state.celsius}
          maxtemp={this.state.temp_max}
          mintemp={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;