import React, { Component/* , PropTypes*/ } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { pushPath, replacePath } from 'redux-simple-router'
import {
} from '../redux/modules/auth'
// react-bootstrap
import {
  Grid,
  Row,
  Col,
  // Image,
} from 'react-bootstrap'
import {
  // TextField,
  // Card,
  // CardTitle,
  // CardText,
  // RaisedButton,
  // Divider,
} from 'material-ui/lib'
// import Colors from 'material-ui/lib/styles/colors'

@connect()
export default class Settings extends Component {
  // static propTypes = {
  // }

  render() {
    return (
      <Grid>
        <Row>
        <Col md={6} mdOffset={3}>
          <h1>Settings...</h1>
        </Col>
        </Row>
      </Grid>
    )
  }
}
