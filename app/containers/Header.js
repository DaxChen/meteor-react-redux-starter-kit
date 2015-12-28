import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
  dispatch => bindActionCreators({logout}, dispatch))
export default class Header extends Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired,
  }

  renderLoginProfile() {
    console.log('[Header]: loggedIn: ' + this.props.auth.user)
    if (this.props.auth.user) {
      return (
        <IconMenu width={100} iconButtonElement={
          <FlatButton
            label={this.props.auth.user.profile.name} labelPosition="after"
            style={{color: '#fff'}}>
            <Avatar icon={<i className="fa fa-user" />} />
          </FlatButton>
        }>
          <MenuItem primaryText="Profile" leftIcon={
            <FontIcon className="material-icons">people</FontIcon>
          } />
        <MenuItem primaryText="Settings" leftIcon={
            <FontIcon className="material-icons">settings</FontIcon>
          } />
          <Divider />
          <MenuItem primaryText="Sign out" onClick={this.props.logout} leftIcon={
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
