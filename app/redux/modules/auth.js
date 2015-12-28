// uses "Ducks: Redux Reducer Bundles", check out:
// https://github.com/erikras/ducks-modular-redux
// on more how to structure your reducers
const VIEWER_CHANGED = 'my-app/auth/VIEWER_CHANGED'

// const LOGGING_IN = 'my-app/auth/LOGGING_IN'
// const LOGGED_IN = 'my-app/auth/LOGGED_IN'
const LOGIN_ERROR = 'my-app/auth/LOGIN_ERROR'

// const LOGGING_OUT = 'my-app/auth/LOGGING_OUT'
// const LOGGED_OUT = 'my-app/auth/LOGGED_OUT'
const LOGOUT_ERROR = 'my-app/auth/LOGOUT_ERROR'

// const SIGN_UP_BEGIN = ''
// const SIGN_UP_SUCCESS = ''
const SIGN_UP_ERROR = ''

// helper to *copy* old state and merge new data with it
import { extend } from 'lodash'
function merge(oldState, newState) {
  return extend({}, oldState, newState)
}


const initialState = {
  user: null,
  errMessage: null,
  // loggingIn: false,
  // loggedIn: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case VIEWER_CHANGED:
    return merge(state, {
      user: action.user,
      errMessage: null,
    })
  case LOGIN_ERROR:
    return merge(state, { errMessage: action.err })

  default:
    return state
  }
}

export function viewerChanged(newDocs) {
  // console.log(Meteor.user())
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
  // console.log('logout action called')
  return dispatch => {
    // dispatch(loggingOut())
    // console.log('now loggingOut...')
    Meteor.logout(err => {
      if (err) {
        alert('Error while logging out: ' + err.message)
        dispatch(logoutError(err))
      // } else {
        // console.log('logout success!!')
      //   dispatch(loggedOut())
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
