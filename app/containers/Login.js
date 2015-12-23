import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWithGoogle, loginWithFacebook } from '../redux/modules/auth';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginWithGoogle,
    loginWithFacebook,
  }, dispatch);
}

class Login extends Component {
  static propTypes = {
    loginWithGoogle: PropTypes.func.isRequired,
    loginWithFacebook: PropTypes.func.isRequired,
    loginWithPassword: PropTypes.func,
  }
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      loginErrMsg: '',
    };
  }

  render() {
    return (
      <div className="container">
        <h2> Login or Sign up </h2>
        <button onClick={this.props.loginWithFacebook}>Login with Facebook</button>
        <button onClick={this.props.loginWithGoogle}>Login with Google</button>
        <form className="" onSubmit={this.props.loginWithPassword}>
          <h4>{this.state.loginErrMsg}</h4>
          <input type="email" ref="email"></input>
          <input type="password" ref="password"></input>
          <input type="submit" ref="submit"></input>
        </form>
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(Login);
