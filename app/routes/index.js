import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import App            from '../containers/App';
import Foo              from '../containers/Foo';
import Bar             from '../containers/Bar';

export default (
  <Route        component={App} path="/">
    <IndexRoute component={Foo} />
    <Route      component={Bar}  path="/bar" />
  </Route>
);
