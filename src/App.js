import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import './App.css';
import WeatherForecast from './components/WeatherForecast'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WeatherForecast} />
    </Router>
    </div>
  );
}

export default App;
