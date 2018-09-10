import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="nomatch error">
      <h1>404 - Page not found</h1>
      <p className="App-intro">Тhe truth is out <Link className="link" to="/">there</Link>.</p>
    </div>
  )
}

export default NoMatch
