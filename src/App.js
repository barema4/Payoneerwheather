import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import WeatherForecast from './components/WeatherForecast'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={WeatherForecast} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
