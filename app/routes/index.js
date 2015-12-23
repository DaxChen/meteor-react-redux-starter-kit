import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import Landing from '../components/Landing';
import Login from '../containers/Login';
import About from '../components/About';
import NotFound from '../components/NotFound';

export default (
  <Route path="/" component={CoreLayout} >
    <IndexRoute component={Landing} />
    <Route path="login" component={Login} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound}/>
  </Route>
);
