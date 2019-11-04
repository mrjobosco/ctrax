import React from 'react';
import './App.css';
import Home from 'views/home';
import Store from 'views/store';
import About from 'views/about';
import Test from 'views/test';
import Management from 'views/management';
import PointOfSale from 'views/point-of-sale';
import {
  HashRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/store'} component={Store} />
        <Route exact={true} path={'/management'} component={Management} />
        <Route exact={true} path={'/point-of-sale'} component={PointOfSale} />
        <Route exact={true} path={'/test'} component={Test} />
        <Route exact={true} path={'/about'} component={About} />
      </Switch>
    </Router>
  );
}

export default App;
