import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
}from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import './App.css';


const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shows/:id" component={Show} />
      </Switch>
    </Router>
    </div>
  );
};

export default App;
