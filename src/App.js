import React from 'react';
import './App.css';
import Home from 'views/home';
import Store from 'views/store';
import About from 'views/about';
import Test from 'views/test';
import Management from 'views/management';
import PointOfSale from 'views/point-of-sale';
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
        <Route path={'/point-of-sale'} component={PointOfSale} />
        <Route path={'/test'} component={Test} />
        <Route path={'/about'} component={About} />
        <Route path={'/store'} component={Store} />
        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
