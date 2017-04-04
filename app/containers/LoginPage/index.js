/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logIn, removeError } from 'containers/App/actions';
import { makeSelectError } from 'containers/App/selectors';

import Wrapper from 'components/Wrapper';
import LoginForm from 'components/LoginForm';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <LoginForm login={this.props.login} error={this.props.error} removeError={this.props.removeError}/>
      </Wrapper>
    );
  }
}

LoginPage.propTypes = {
  login: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(logIn(username, password)),
    removeError: () => dispatch(removeError()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
