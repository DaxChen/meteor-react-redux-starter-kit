import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../styles/core.scss';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element,
    auth: React.PropTypes.object,
  }

  render() {
    return (
      <div>
        <Header auth={this.props.auth} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CoreLayout);
