// this is the entry point of client
import React                  from 'react';
import ReactDOM               from 'react-dom';
import createBrowserHistory   from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';
import Root                   from './containers/Root';
import configureStore         from './store/configureStore';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
window.__DEBUG__ = true;
Meteor.startup(() => {
  const target  = document.getElementById('root');
  const history = createBrowserHistory();
  const store   = configureStore(window.__INITIAL_STATE__, __DEBUG__);

  syncReduxAndRouter(history, store);

  const node = (
    <Root
      history={history}
      store={store}
      debug={__DEBUG__}
    />
  );

  ReactDOM.render(node, target);
});
