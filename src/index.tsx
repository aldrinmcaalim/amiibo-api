import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetAmiiboPage from './components/pages/get-amiibo-page';
import HomePage from './components/pages/home-page';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/home">
        <HomePage></HomePage>
      </Route>

      <Route path="/info">
        <GetAmiiboPage></GetAmiiboPage>
      </Route>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

