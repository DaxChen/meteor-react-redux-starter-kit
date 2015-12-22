import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Foo extends Component {
  render() {
    return (
      <div>
        <h2> FOOOOOOOOO </h2>
        <Link to="/bar">GO TO BAR</Link>
      </div>
    );
  }
}
