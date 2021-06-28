import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Fiverr from './components/Fiverr_source';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/fiverr" component={Fiverr} />
      </Switch>
    </div>
    
  );
}

export default App;
