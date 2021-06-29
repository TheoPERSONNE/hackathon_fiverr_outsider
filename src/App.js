import React from 'react';
import './App.css';
import Fiverr from './components/Fiverr_source';
import Home from './components/Home';
import Finalize from './components/Finalize';
import { Switch, Route } from 'react-router-dom';
 

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/fiverr" component={Fiverr} />
        <Route path="/Home" component={Home} />
        <Route path="/Finalize" component={Finalize} />
      </Switch>
    </div>
    
  );
}

export default App;
