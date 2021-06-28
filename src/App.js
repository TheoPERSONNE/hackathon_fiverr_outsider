import React from 'react';


import './App.css';
import Fiverr from './components/Fiverr_source';
import Home from './components/Home';
import Finalize from './components/Finalize';

function App() {
  return (
    <div className="App">
    <div>
      <h2> hello</h2>
      <Switch>
        <Route exact path="/" component={Fiverr} />
        <Route path="/fiverr" component={Fiverr} />
        <Route path="/Home" component={Home} />
        <Route path="/Finalize" component={Finalize} />
      </Switch>
    </div>
    
  );
}

export default App;
