import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router';

@connect()
export default class Profile extends Component {
  static propTypes = {
  }

  componentWillMount() {
    // fetch data
  }

  render() {
    return (
      <div>
        <h2> Profile Page </h2>
      </div>
    )
  }
}
