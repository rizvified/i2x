/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { logIn } from 'containers/App/actions';

import Wrapper from 'components/Wrapper';
import LoginForm from 'components/LoginForm';


export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <LoginForm login={this.props.login}/>
      </Wrapper>
    );
  }
}

LoginPage.propTypes = {};


function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(logIn(username, password)),
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
