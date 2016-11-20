import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from './App';

import ProjectPage from './components/ProjectPage';

import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/:project" component={ProjectPage} />
  </Router>,
  document.getElementById('root')
);
