import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('i2x_token')) {
      browserHistory.push('/home');
    } else {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <main>
        {React.Children.toArray(this.props.children)}
      </main>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
