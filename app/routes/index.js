import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from '../layouts/CoreLayout'
import EmptyLayout from '../layouts/EmptyLayout'
import Landing from '../components/Landing'
import Login from '../containers/Login'
import App from '../components/App'
import About from '../components/About'
import NotFound from '../components/NotFound'

function onLoginEnter(nextState, replaceState) {
  console.log(nextState, replaceState)
}

export default (
  <Route path="/" component={App}>
    {/* Layout No.1 */}
    <Route component={CoreLayout}>
      <IndexRoute component={Landing} />
      <Route path="about" component={About} />
    </Route>

    {/* Layout No.2 */}
    <Route component={EmptyLayout}>
      <Route path="login" component={Login} onEnter={onLoginEnter} isLogin />
      <Route path="signup" component={Login} isLogin={false} />
    </Route>

    {/* Catch app path for Not Found */}
    <Route path="*" component={NotFound} />
  </Route>
)
