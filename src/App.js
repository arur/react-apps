import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WrapRoute from './components/wrap-route';

import Home from './components/home';
import Nav from './components/nav';
import NoMatch from './components/no-match';

import StopwatchApp from './components/projects/stopwatch-app';
import TodoApp from './components/projects/todo-app';
import WeatherApp from './components/projects/weather-app';

import { stopwatchApp, todoApp, weatherApp } from './components/projects/projectInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Artur Hayrapetyan</h1>
            <Nav />
          </header>
          <main className="App-main">
            <Switch>
              <Route exact path="/" component={Home} />
              <WrapRoute {...stopwatchApp} path="/projects/stopwatch-app" component={StopwatchApp} />
              <WrapRoute {...todoApp} path="/projects/todo-app" component={TodoApp} />
              <WrapRoute {...weatherApp} path="/projects/weather-app" component={WeatherApp} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
