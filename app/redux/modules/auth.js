import { extend } from 'lodash'
import { replacePath } from 'redux-simple-router'

/**
 * uses "Ducks: Redux Reducer Bundles", check out:
 * https://github.com/erikras/ducks-modular-redux
 * on more how to structure your reducers
 */
const VIEWER_CHANGED = 'my-app/auth/VIEWER_CHANGED'
const LOGIN_ERROR = 'my-app/auth/LOGIN_ERROR'
const LOGOUT_ERROR = 'my-app/auth/LOGOUT_ERROR'
const SIGN_UP_ERROR = 'my-app/auth/SIGN_UP_ERROR'
const SHOW_NEED_LOGIN_MSG = 'my-app/auth/SHOW_NEED_LOGIN_MSG'

// helper to *copy* old state and merge new data with it
function merge(oldState, newState) {
  return extend({}, oldState, newState)
}


const initialState = {
  user: null,
  errMsg: null,
  needLoginMsg: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case VIEWER_CHANGED:
    return merge(state, {
      user: action.user,
      errMsg: null,
      needLoginMsg: false,
    })
  case LOGIN_ERROR:
  case LOGOUT_ERROR:
  case SIGN_UP_ERROR:
    return merge(state, { errMsg: action.err })
  case SHOW_NEED_LOGIN_MSG:
    return merge(state, { needLoginMsg: true })
  default:
    return state
  }
}

export function viewerChanged(newDocs) {
  // console.log('viewerChanged')
  return {
    type: VIEWER_CHANGED,
    user: newDocs,
  }
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err,
  }
}
export function loginWithPassword(user, password) {
  // console.log('loginWithPassword action called')
  return dispatch => {
    // console.log('now logging in...')
    Meteor.loginWithPassword(user, password, err => {
      if (err) {
        alert('Error while login with password: ' + err.message)
        dispatch(loginError(err.message))
      // } else {
        // console.log('login success!!!')
      //   dispatch(loggedIn())
      }
    })
  }
}
export function loginWithFacebook() {
  return dispatch => {
    Meteor.loginWithFacebook(err => {
      if (err) {
        alert('Error while login with facebook: ' + err.message)
        dispatch(loginError(err.message))
      // } else {
      //   dispatch(loggedIn())
      }
    })
  }
}
export function loginWithGoogle() {
  return dispatch => {
    Meteor.loginWithGoogle(err => {
      if (err) {
        alert('Error while login with google: ' + err.message)
        dispatch(loginError(err.message))
      // } else {
      //   dispatch(loggedIn())
      }
    })
  }
}

export function logoutError(err) {
  return {
    type: LOGOUT_ERROR,
    err,
  }
}

export function logout() {
  return dispatch => {
    Meteor.logout(err => {
      if (err) {
        alert('Error while logging out: ' + err.message)
        dispatch(logoutError(err))
      }
    })
  }
}

export function logoutAndRedirectHome() {
  return dispatch => {
    Meteor.logout(err => {
      if (err) {
        dispatch(logoutError(err))
      } else {
        dispatch(replacePath('/'))
      }
    })
  }
}

export function signUpError(err) {
  return {
    type: SIGN_UP_ERROR,
    err,
  }
}
export function signUpWithPassword({username, email, password}) {
  return dispatch => {
    Accounts.createUser({username, email, password}, err => {
      if (err) {
        alert('Error while creating Account: ' + err.message)
        dispatch(signUpError(err.message))
      // } else {
      //   dispatch()
      }
    })
  }
}

export function showNeedLoginMsg() {
  return {
    type: SHOW_NEED_LOGIN_MSG,
  }
}
