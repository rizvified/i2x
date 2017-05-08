import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Header from '../components/Header.jsx';
import Content from '../components/Content.jsx';

import { API_CONTENT } from '../utils/constants';
import request from '../utils/request';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('i2x_token');
    const requestURL = API_CONTENT;
    const requestObj = {
      method: 'GET',
      headers: new Headers({
        Authorization: `JWT ${token}`,
      }),
    };
    request(requestURL, requestObj).then((reply) => {
      if (reply.results.length > 0) {
        this.setState({ content: reply.results });
      } else {
        console.log('no reply from API');
      }
    });
  }

  logout() {
    localStorage.removeItem('i2x_token');
    browserHistory.push('/');
  }

  render() {
    const data = this.state.content;
    return (
      <div className='container'>
        <Header logout={ this.logout } />
        {
          data !== null &&
          <Content data={ this.state.content } />
        }
      </div>
    );
  }
}

export default Home;
