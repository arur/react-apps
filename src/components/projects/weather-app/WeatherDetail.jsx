import React from 'react';
import ForecastList from './ForecastList';

function WeatherDetail(props) {
  const { item, location } = props.weather.channel;

  return (
    <section className="weather-detail">
      <div className="location">
        <h2>{`${location.city}, ${location.region}`}</h2>
        <p>{item.pubDate}</p>
      </div>
      <div className="weather">
        <div className="temperature">
          {item.condition.temp}
          <i className="wi wi-celsius" />
        </div>
        <div className="hilow">
          <p>
            {item.forecast[0].high + ' '}
            <i className="wi wi-degrees" />
            <i className="wi wi-direction-up" />
          </p>
          <p>
            {item.forecast[0].low + ' '}
            <i className="wi wi-degrees" />
            <i className="wi wi-direction-down" />
          </p>
        </div>
        <div className="condition">
          <i className={`wi wi-yahoo-${item.condition.code}`} />
          <p>{item.condition.text}</p>
        </div>
      </div>

      <ForecastList forecasts={item.forecast.slice(1, 6)} />
      
    </section>
  );
}
export default WeatherDetail;
