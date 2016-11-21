import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from './App';

import ProjectIndexPage from './components/ProjectIndexPage';
import ProjectPage from './components/ProjectPage';

import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectIndexPage} />
      <Route path=":project" component={ProjectPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
