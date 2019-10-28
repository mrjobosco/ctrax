import React from 'react';
import './App.css';
import Home from 'views/home';
import Store from 'views/store';
import Management from 'views/management';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/management'} component={Management} />
        <Route path={'/store'} component={Store} />
        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
