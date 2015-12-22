import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Foo extends Component {
  render() {
    return (
      <div>
        <h2> BARRRRR </h2>
        <Link to="/">BACK TO FOO</Link>
      </div>
    );
  }
}
