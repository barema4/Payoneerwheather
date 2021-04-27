import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import WeatherForecast from './components/WeatherForecast'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={WeatherForecast} />
        <Redirect to="/"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
