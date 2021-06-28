import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Fiverr from './components/Fiverr_source';
import Home from './components/Home';

function App() {
  return (
    <div>
      <h2> hello</h2>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/fiverr" component={Fiverr} />
      </Switch>
    </div>
    
  );
}

export default App;
