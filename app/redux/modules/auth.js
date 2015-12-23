import { merge } from 'lodash';
// uses "Ducks: Redux Reducer Bundles", check out:
// https://github.com/erikras/ducks-modular-redux
// on more how to structure your reducers
const LOGGING_IN = 'my-app/auth/LOGGING_IN';
const USER_DATA = 'my-app/auth/USER_DATA';

const initialState = {
  user: null,
  loggingIn: false,
};

export default function reducer(state = initialState, action) {
  const {data, type} = action;

  switch (type) {
  case USER_DATA:
    return merge({}, state, {
      user: data,
    });

  case LOGGING_IN:
    return merge({}, state, {
      loggingIn: data,
    });

  default:
    return state;
  }
}

export function loginWithFacebook() {
  return () => {
    Meteor.loginWithFacebook(err => {
      if (err) {
        alert('Error while login with facebook');
      }
    });
  };
}

export function loginWithGoogle() {
  return () => {
    Meteor.loginWithGoogle(err => {
      if (err) {
        alert('Error while login with google');
      }
    });
  };
}

// we use Meteor's reactive data to automatically
// dispatch actions when data changes.
export function loadUser() {
  return dispatch => {
    Tracker.autorun(() => {
      dispatch({
        type: LOGGING_IN,
        data: Meteor.loggingIn(),
      });
    });

    Tracker.autorun(() => {
      dispatch({
        type: USER_DATA,
        data: Meteor.user(),
      });
    });
  };
}

export function logout() {
  return () => {
    Meteor.logout(err => {
      if (err) {
        alert('Error while login with google');
      }
    });
  };
}
