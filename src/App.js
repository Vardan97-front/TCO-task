import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Licenses from './pages/Licenses';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/styles/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/Offline%20Activation" exact />
        <Route path="/:path" component={Licenses} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
