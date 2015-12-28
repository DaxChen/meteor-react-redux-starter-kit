import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import getRoutes from '../routes'
import DevTools from './DevTools'

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
    debug: React.PropTypes.bool,
  }
  static defaultProps = {
    debug: false,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            { getRoutes(this.props.store) }
          </Router>
          {this.props.debug ? <DevTools /> : null}
        </div>
      </Provider>
    )
  }
}
