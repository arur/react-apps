import React from 'react';
import ForecastItem from './ForecastItem';

function ForecastList(props) {
  return (
    <ul className="forecast-list">
      {props.forecasts.map(forecast => (
        <ForecastItem key={forecast.day} {...forecast} />
      ))}
    </ul>
  );
}
export default ForecastList;
