// this is the entry point of client
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { viewerChanged } from './redux/modules/auth'
// import { user } from './meteor-redux'

// TODO set these globals with webpack
window.__DEBUG__ = true

const injectTapEventPlugin = require('react-tap-event-plugin')
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// react render
Meteor.startup(() => {
  const target  = document.getElementById('root')
  const history = createBrowserHistory()
  const store   = configureStore(window.__INITIAL_STATE__, __DEBUG__)

  syncReduxAndRouter(history, store)

  // auto update currentUser using skinnygeek1010:flux-helpers
  trackViewer((newDocs) => {
    store.dispatch(viewerChanged(newDocs))
  })
  // dispatch once
  // console.log('manual call viewerChanged')
  store.dispatch(viewerChanged(Meteor.user()))

  const node = (
    <Root
      history={history}
      store={store}
      debug={__DEBUG__}
    />
  )

  ReactDOM.render(node, target)

  if (__DEBUG__) {
    window.store = store
  }
})
