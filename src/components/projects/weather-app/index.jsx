import React, { Component } from 'react';
import LocationDropdown from './LocationDropdown';
import WeatherDetail from './WeatherDetail';
import './css/weather-icons.css';
import './css/weather-app.css';

function getUrl(location) {
  // If Celsius has been specified as the degree units for the feed (using the
  // u="c" request parameter), all the units are in metric format (Celsius,
  // kilometers, millibars, kilometers per hour).
  const baseUrl = 'https://query.yahooapis.com/v1/public/yql';
  const query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="c"`;
  return `${baseUrl}?format=json&q=${query}`;
}

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'vancouver',
      weather: null,
      isLoading: false,
      hasError: false
    };

    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getWeatherData(this.state.location);
  }

  handleDropdownSelect(location) {
    this.setState({ isLoading: true, location });
    this.getWeatherData(location);
  }

  getWeatherData(location) {
    return fetch(getUrl(location))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data =>
        this.setState({ weather: data.query.results, isLoading: false, hasError: false })
      )
      .catch(error => this.setState({ hasError: true, isLoading: false }));
  }

  render() {
    return (
      <div className="weather-app">
        <header className="header">
          <h1>Weather Forecast</h1>
        </header>
        <main>
          <LocationDropdown
            location={this.state.location}
            onDropdownSelect={this.handleDropdownSelect}
          />
        { (this.state.weather && !this.state.hasError)
          ? <WeatherDetail weather={this.state.weather} />
          : <div className="error">Something went wrong</div>
        }
        </main>
        {this.state.isLoading && <div className="load-spinner" />}
        <footer className="footer">
          <p>
            Powered by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.yahoo.com/weather/">
              YAHOO! Weather API
            </a>
            {` and `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://github.com/erikflowers/weather-icons">
              Weather Icons
            </a>
          </p>
          <p>Artur Hayrapetyan</p>
        </footer>
      </div>
    );
  }
}
export default WeatherApp;
