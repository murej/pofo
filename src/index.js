import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import App from './App';

import ProjectIndexPage from './components/ProjectIndexPage';
import ProjectPage from './components/ProjectPage';

import './assets/fonts/fonts.css';
import './index.scss';

ReactDOM.render(
  <Router history={hashHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectIndexPage} />
      <Route path=":project" component={ProjectPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
