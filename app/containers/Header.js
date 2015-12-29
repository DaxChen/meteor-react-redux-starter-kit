import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushPath } from 'redux-simple-router'
import {
  AppBar,
  RaisedButton,
  Avatar,
  FlatButton,
  Divider,
  FontIcon,
} from 'material-ui/lib'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { logout } from '../redux/modules/auth'

@connect(
  state => ({ auth: state.auth }),
  dispatch => bindActionCreators({
    logout,
    pushPath,
  }, dispatch))
export default class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    pushPath: PropTypes.func.isRequired,
  }

  renderLoginProfile() {
    // console.log('[Header]: loggedIn: ' + this.props.auth.user)
    const { props } = this
    if (props.auth.user) {
      return (
        <IconMenu width={100} iconButtonElement={
          <FlatButton
            label={props.auth.user.profile.name} labelPosition="after"
            style={{color: '#fff'}}>
            <Avatar icon={<i className="fa fa-user" />} />
          </FlatButton>
        }>
          <MenuItem
            linkButton
            containerElement={<Link to={`/u/${props.auth.user._id}`} />}
            primaryText="Profile"
            leftIcon={
              <FontIcon className="material-icons">people</FontIcon>
            } />
          <MenuItem
            linkButton
            containerElement={<Link to="/settings" />}
            primaryText="Settings" leftIcon={
            <FontIcon className="material-icons">settings</FontIcon>
          } />
          <Divider />
          <MenuItem primaryText="Sign out" onClick={props.logout} leftIcon={
            <FontIcon className="material-icons">exit_to_app</FontIcon>
          } />
        </IconMenu>
      )
    }
    return (
      <RaisedButton
        containerElement={<Link to="/login" />}
        linkButton
        primary
        label="Sign up or Login"
      />
    )
  }

  render() {
    return (
      <AppBar
        title={
          <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>BrandName</Link>
        }
        showMenuIconButton={false}
        iconElementRight={this.renderLoginProfile()}
      />
    )
  }
}
