import React from 'react';
import './App.css';
import {Home} from 'views/home';
import {Store} from 'views/store';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/store'} component={Store} />
        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
