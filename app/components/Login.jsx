
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Form from './Form.jsx';

import { API_LOGIN } from '../utils/constants';
import request from '../utils/request';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
    this.setState({ error: '' });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ error: '' });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const requestURL = API_LOGIN;
    const requestObj = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    };
    request(requestURL, requestObj).then((result) => {
      if (result.token) {
        localStorage.setItem('i2x_token', result.token);
        browserHistory.push('/home');
      } else {
        this.setState({ error: result.non_field_errors });
        this.setState({ username: '' });
        this.setState({ password: '' });
      }
    });
  }

  render() {
    const props = {
      username: this.state.username,
      password: this.state.password,
      error: this.state.error,
      handleUsername: this.handleUsername,
      handlePassword: this.handlePassword,
      handleSubmit: this.handleSubmit,
    };
    return (
      <div className='login_container'>
        <span className='overlay' />
        <Form { ...props } />
      </div>
    );
  }
}

export default Login;
