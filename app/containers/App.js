import React, { Component } from 'react';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div className="container">
        <h1> HAHAHA </h1>
        {this.props.children}
      </div>
    );
  }
}
