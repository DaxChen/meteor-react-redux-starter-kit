import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';
import Avatar from 'material-ui/lib/avatar';

export default class Header extends Component {
  static propTypes = {
    auth: React.PropTypes.object,
  }

  renderLoginProfile() {
    if (this.props.auth.user) {
      return (
        <div>
          <Avatar icon={<i className="fa fa-user" />} />
          <span>{this.props.auth.user.profile.name}</span>
        </div>
      );
    }
    return (
      <RaisedButton
        containerElement={<Link to="/login" />}
        linkButton
        primary
        label="Sign up or Login"
      />
    );
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
    );
  }
}
