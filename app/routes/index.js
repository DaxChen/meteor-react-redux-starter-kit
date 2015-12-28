import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { CoreLayout, EmptyLayout } from '../layouts'
import {
  Login,
} from '../containers'
import {
  App,
  Landing,
  About,
  SecretPage,
  NotFound,
} from '../components'

export default function getRoutes(store) {
  // function doSomething(thing) {
  //   store.dispatch(auth.logout(thing))
  // }

  function requireAuth(nextState, replaceState) {
    if (!store.getState().auth.user) {
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }
  }

  return (
    <Route path="/" component={App}>
      {/* Layout No.1 */}
      <Route component={CoreLayout}>
        <IndexRoute component={Landing} />
        <Route path="about" component={About} />
        <Route path="secretpage" component={SecretPage} onEnter={requireAuth} />
      </Route>

      {/* Layout No.2 */}
      <Route component={EmptyLayout}>
        <Route path="login" component={Login} isLogin />
        <Route path="signup" component={Login} isLogin={false} />
      </Route>

      {/* Catch app path for Not Found */}
      <Route path="*" component={NotFound} />
    </Route>
  )
}
