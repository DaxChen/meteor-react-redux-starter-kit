import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushPath, replacePath } from 'redux-simple-router'
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
  Image,
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

@connect(
  state => ({ auth: state.auth }),
  dispatch => bindActionCreators({
    signUpWithPassword,
    loginWithPassword,
    loginWithGoogle,
    loginWithFacebook,
    pushPath,
    replacePath,
  }, dispatch))
export default class Login extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pushPath: PropTypes.func.isRequired,
    replacePath: PropTypes.func,
    signUpWithPassword: PropTypes.func.isRequired,
    loginWithGoogle: PropTypes.func.isRequired,
    loginWithFacebook: PropTypes.func.isRequired,
    loginWithPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  }
  static defaultProps = {
    'route.isLogin': true,
  }

  componentWillMount() {
    const { auth, location } = this.props
    if (auth.user) {
      if (location.state && location.state.nextPathname) {
        this.props.replacePath(location.state.nextPathname)
      } else {
        this.props.replacePath('/')
      }
    }
  }
  componentDidMount() {
    const focusEl = this.props.route.isLogin ? this.refs.user : this.refs.username
    focusEl.focus()
  }
  componentWillReceiveProps(nextProps) {
    const { location } = this.props
    if (nextProps.auth.user) {
      if (location.state && location.state.nextPathname) {
        this.props.pushPath(location.state.nextPathname)
      } else {
        this.props.pushPath('/')
      }
    }
  }
  componentDidUpdate() {
    const focusEl = this.props.route.isLogin ? this.refs.user : this.refs.username
    focusEl.focus()
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.route.isLogin) {
      const user = this.refs.user.getValue()
      const password = this.refs.password.getValue()
      this.props.loginWithPassword(user, password)
    } else {
      const username = this.refs.username.getValue()
      const email = this.refs.email.getValue()
      const password = this.refs.password.getValue()
      this.props.signUpWithPassword({ username, email, password })
    }
  }

  renderForm() {
    return this.props.route.isLogin ?
    (
      <form className="center-block" onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          ref="user"
          fullWidth
          hintText="username or email"
          floatingLabelText="Username or Email" />
        <TextField
          ref="password"
          fullWidth
          hintText="password"
          floatingLabelText="Password"
          type="password" />
        <RaisedButton
          label="Login"
          type="submit"
          fullWidth
          style={{height: '4rem'}}
          secondary />
      </form>
    ) :
    (
      <form className="center-block" onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          ref="email"
          fullWidth
          hintText="email"
          type="email"
          floatingLabelText="Email" />
        <TextField
          ref="username"
          fullWidth
          hintText="username"
          floatingLabelText="Username" />
        <TextField
          ref="password"
          fullWidth
          hintText="password"
          floatingLabelText="Password"
          type="password" />
        <RaisedButton
          label="Create Account!"
          type="submit"
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
    return (
      <Grid>
        <Row>
        <Col md={6} mdOffset={3}>
          <Link to="/" className="center-block"
            style={{ maxWidth: '6rem', maxHeight: '6rem', margin: '20px auto' }}>
            <Image src={require('../../assets/logo.png')} responsive />
          </Link>
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
                label={(isLogin ? 'Login' : 'SignUp') + ' with Facebook'}>
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
                label={(isLogin ? 'Login' : 'SignUp') + ' with Google'}>
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
