import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';

import Portfolio from './pages/Portfolio';
import Games from './pages/Games';
import About from './pages/About';
import RadFolx from './pages/RadFolx';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Portfolio}></IndexRoute>
      <Route path='/frontend' component={Portfolio}></Route>
      <Route path='/games' component={Games}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/radfolx' component={RadFolx}></Route>
    </Route>
  </Router>,
app);
