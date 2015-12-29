import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { CoreLayout, EmptyLayout } from '../layouts'
import {
  Login,
  Profile,
  Settings,
} from '../containers'
import {
  About,
  App,
  Landing,
  NotFound,
  SecretPage,
} from '../components'
import {
  logoutAndRedirectHome,
  showNeedLoginMsg,
} from '../redux/modules/auth'

export default function getRoutes(store) {
  /**
   * This is how you access redux store in react-router onEnter/onLeave Hooks
   * see this for more detail:
   * http://stackoverflow.com/questions/33643290/how-do-i-get-a-hold-of-the-store-dispatch-in-react-router-onenter
   */
  function logoutOnEnterHook(nextState, replaceState) {
    if (store.getState().auth.user) {
      // logout the user, and redirect to '/' while success
      store.dispatch(logoutAndRedirectHome())
    } else {
      // the user hasn't login yet
      replaceState(null, '/')
    }
  }

  function requireAuth(nextState, replaceState) {
    if (!store.getState().auth.user) {
      store.dispatch(showNeedLoginMsg())
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
        <Route path="settings" component={Settings} onEnter={requireAuth} />
        <Route path="/u/:id" component={Profile} />
      </Route>

      {/* Layout No.2 */}
      <Route component={EmptyLayout}>
        <Route path="login" component={Login} isLogin />
        <Route path="signup" component={Login} isLogin={false} />
        <Route path="logout" onEnter={logoutOnEnterHook} />
      </Route>

      {/* Catch app path for Not Found */}
      <Route path="*" component={NotFound} />
    </Route>
  )
}
