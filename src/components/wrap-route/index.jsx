import React from 'react';
import { Route } from 'react-router-dom';

const WrapRoute = ({component: Component, title, description, ...rest}) => (
  <Route {...rest} render={props => (
      <div className="project-container">
        <div className="project">
          <Component {...props}/>
        </div>
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    )}/>
)
export default WrapRoute;
