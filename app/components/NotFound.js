import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h2> OOPS! 404 Not Found </h2>
        <h3> The requested URL was not found on this server. </h3>
        <Link to="/">Back To Home Page</Link>
      </div>
    );
  }
}
