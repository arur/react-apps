import React from 'react';

function ForecastItem({ code, day, high, low }) {
  return (
    <li className="forecast-item">
      <section>
        <h3>{day}</h3>
        <div style={{ marginBottom: '0.7em' }}>
          <i style={{ fontSize: '1.75em' }} className={`wi wi-yahoo-${code}`} />
        </div>
        <div style={{ fontSize: '0.875em' }}>
          <span>{high}</span>
          <i className="wi wi-degrees" />
          <i className="wi wi-direction-up" style={{ marginRight: '0.7em' }} />
          <span>{low}</span>
          <i className="wi wi-degrees" />
          <i className="wi wi-direction-down" />
        </div>
      </section>
    </li>
  );
}

export default ForecastItem;
