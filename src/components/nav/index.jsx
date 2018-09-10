import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects/stopwatch-app">Stopwatch</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects/todo-app">Todo</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projects/weather-app">Weather</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
