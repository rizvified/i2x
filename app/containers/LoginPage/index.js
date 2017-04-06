/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { logIn, removeError, setUsername, setPassword } from 'containers/App/actions';
import { makeSelectError, makeSelectUsername, makeSelectPassword } from 'containers/App/selectors';

import Wrapper from 'components/Wrapper';
import LoginForm from 'components/LoginForm';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const props = {
      login: this.props.login,
      username: this.props.username,
      password: this.props.password,
      error: this.props.error,
      removeError: this.props.removeError,
      set_username: this.props.setUsername,
      set_password: this.props.setPassword
    }
    return (
      <Wrapper>
        <LoginForm {...props} />
      </Wrapper>
    );
  }
}

LoginPage.propTypes = {
  login: React.PropTypes.func,
  removeError: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(logIn()),
    setUsername: (username) => dispatch(setUsername(username)),
    setPassword: (password) => dispatch(setPassword(password)),
    removeError: () => dispatch(removeError()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
