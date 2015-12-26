import { merge } from 'lodash'
// uses "Ducks: Redux Reducer Bundles", check out:
// https://github.com/erikras/ducks-modular-redux
// on more how to structure your reducers
const USER_DATA = 'my-app/auth/USER_DATA'

const LOGGING_IN = 'my-app/auth/LOGGING_IN'
const LOGGED_IN = 'my-app/auth/LOGGED_IN'
const LOGIN_ERROR = 'my-app/auth/LOGIN_ERROR'

const LOGGING_OUT = 'my-app/auth/LOGGING_OUT'
const LOGGED_OUT = 'my-app/auth/LOGGED_OUT'
const LOGOUT_ERROR = 'my-app/auth/LOGOUT_ERROR'

const SIGN_UP_BEGIN = ''
const SIGN_UP_SUCCESS = ''
const SIGN_UP_ERROR = ''

const initialState = {
  user: null,
  loggingIn: false,
}

export default function reducer(state = initialState, action) {
  const {data, type, err} = action

  switch (type) {
  case USER_DATA:
    return merge({}, state, {
      user: data,
    })

  case LOGGING_IN:
    return merge({}, state, {
      loggingIn: true,
      errorMessage: null,
    })
  case LOGGED_IN:
    return merge({}, state, {
      loggingIn: false,
      errorMessage: null,
    })
  case LOGIN_ERROR:
    return merge({}, state, {
      loggingIn: false,
      errorMessage: err.message,
    })

  case LOGGING_OUT:
    return merge({}, state, {
      loggingOut: true,
      errorMessage: null,
    })
  case LOGGED_OUT:
    return merge({}, state, {
      loggingOut: false,
      errorMessage: null,
    })
  case LOGOUT_ERROR:
    return merge({}, state, {
      loggingOut: false,
      errorMessage: err.message,
    })

  case SIGN_UP_BEGIN:
    return merge({}, state, {
      signingUp: false,
      errorMessage: null,
    })
  case SIGN_UP_SUCCESS:
    return merge({}, state, {
      signingUp: false,
      errorMessage: null,
    })
  case SIGN_UP_ERROR:
    return merge({}, state, {
      signingUp: false,
      errorMessage: err.message,
    })

  default:
    return state
  }
}

export function loadUser() {
  return dispatch => {
    Tracker.autorun(() => {
      dispatch({
        type: USER_DATA,
        data: Meteor.user(),
      })
    })
  }
}

export function loggingIn() {
  return {
    type: LOGGING_IN,
  }
}

export function loggedIn() {
  return {
    type: LOGGED_IN,
  }
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err,
  }
}

export function loginWithPassword(user, password) {
  return dispatch => {
    dispatch(loggingIn())
    Meteor.loginWithPassword(user, password, err => {
      if (err) {
        alert('Error while login with password: ' + err.reason)
        dispatch(loginError(err))
      } else {
        dispatch(loggedIn())
      }
    })
  }
}

export function loginWithFacebook() {
  return dispatch => {
    Meteor.loginWithFacebook(err => {
      if (err) {
        alert('Error while login with facebook: ' + err.reason)
        dispatch(loginError(err))
      } else {
        dispatch(loggedIn())
      }
    })
  }
}

export function loginWithGoogle() {
  return dispatch => {
    Meteor.loginWithGoogle(err => {
      if (err) {
        alert('Error while login with google: ' + err.reason)
        dispatch(loginError(err))
      } else {
        dispatch(loggedIn())
      }
    })
  }
}

export function loggingOut() {
  return {
    type: LOGGING_OUT,
  }
}

export function loggedOut() {
  return {
    type: LOGGED_OUT,
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
    dispatch(loggingOut())
    Meteor.logout(err => {
      if (err) {
        dispatch(logoutError(err))
      } else {
        dispatch(loggedOut())
      }
    })
  }
}

export function signUpBegin() {
  return {
    type: SIGN_UP_BEGIN,
  }
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
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
        dispatch()
      } else {
        dispatch()
      }
    })
  }
}
