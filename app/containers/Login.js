import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  signUpWithPassword,
  loginWithPassword,
  loginWithGoogle,
  loginWithFacebook,
} from '../redux/modules/auth'
// react-bootstrap
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
import {
  TextField,
  Card,
  CardTitle,
  CardText,
  RaisedButton,
  Divider,
} from 'material-ui/lib'
import Colors from 'material-ui/lib/styles/colors'

class Login extends Component {
  static propTypes = {
    route: PropTypes.object,
    signUpWithPassword: PropTypes.func.isRequired,
    loginWithGoogle: PropTypes.func.isRequired,
    loginWithFacebook: PropTypes.func.isRequired,
    loginWithPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  static defaultProps = {
    'route.isLogin': true,
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submit!!!!!!!!!!!!!')
    if (this.props.route.isLogin) {
      let { user, password } = this.refs
      user = user.value
      password = password.value
      this.props.loginWithPassword(user, password)
    } else {
      let { username, email, password } = this.refs
      username = username.value
      email = email.value
      password = password.value
      this.props.signUpWithPassword({ username, email, password })
    }
  }

  renderForm() {
    return this.props.route.isLogin ?
    (
      <form className="center-block" onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          fullWidth
          hintText="username or email"
          floatingLabelText="Username or Email"
          onEnterKeyDown={console.log('user enter!!!')} />
        <TextField
          fullWidth
          hintText="password"
          floatingLabelText="Password"
          type="password" />
        <RaisedButton
          label="Login"
          fullWidth
          style={{height: '4rem'}}
          secondary />
      </form>
    ) :
    (
      <form className="center-block" onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          fullWidth
          hintText="username"
          floatingLabelText="Username"
          onEnterKeyDown={console.log('user enter!!!')} />
        <TextField
          fullWidth
          hintText="email"
          floatingLabelText="Email"
          onEnterKeyDown={console.log('user enter!!!')} />
        <TextField
          fullWidth
          hintText="password"
          floatingLabelText="Password"
          type="password" />
        <RaisedButton
          label="Create Account!"
          fullWidth
          style={{height: '4rem'}}
          secondary />
      </form>
    )
  }

  renderDivider() {
    return (
      <Row>
        <Col xs={10} xsOffset={1}>
          <Divider />
        </Col>
      </Row>
    )
  }

  render() {
    const { isLogin } = this.props.route
    console.log(isLogin)
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <h1 className="text-center"><Link to="/" style={{color: 'black', textDecoration: 'none'}}>Clipo</Link></h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <Card>
              <CardTitle
                title={isLogin ? 'Login' : 'Sign up'}
                titleColor="#fff"
                style={{ background: Colors.red500 }} />

              { /* Social Login */ }
              <Row>
                <Col xs={8} xsOffset={2}>
                  <RaisedButton
                    onClick={this.props.loginWithFacebook}
                    backgroundColor="#3b5998"
                    labelColor="#fff"
                    labelPosition="after"
                    fullWidth
                    style={{margin: '30px auto 0', height: '4rem'}}
                    label={isLogin ? 'Login' : 'SignUp' + ' with Facebook'}>
                    <i className="fa fa-facebook fa-2x" style={{verticalAlign: 'middle', color: '#fff'}} />
                  </RaisedButton>
                </Col>
              </Row>
              <Row>
                <Col xs={8} xsOffset={2}>
                  <RaisedButton
                    onClick={this.props.loginWithGoogle}
                    backgroundColor="#d34836"
                    labelColor="#fff"
                    labelPosition="after"
                    fullWidth
                    style={{margin: '10px auto 30px', height: '4rem'}}
                    label={isLogin ? 'Login' : 'SignUp' + ' with Google'}>
                    <i className="fa fa-google-plus fa-2x" style={{verticalAlign: 'middle', color: '#fff'}} />
                  </RaisedButton>
                </Col>
              </Row>

              { this.renderDivider() }

              { /* Password Login */ }
              <Row>
                <Col xs={8} xsOffset={2}>
                  <CardText>
                    { this.renderForm() }
                  </CardText>
                </Col>
              </Row>

              { this.renderDivider() }

              <Row>
                <Col xs={8} xsOffset={2}>
                  <CardText>
                    { isLogin ?
                      <span>Don't have an account yet? <Link to="/signup">Create One!</Link></span>
                      :
                      <span>Already have an account? <Link to="/login">Login!</Link></span>
                    }
                  </CardText>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUpWithPassword,
    loginWithPassword,
    loginWithGoogle,
    loginWithFacebook,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
