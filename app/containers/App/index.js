/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { setToken } from './actions';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.props.redirectHome();
      this.props.setToken(localStorage.getItem('token'));
    } else {
      this.props.redirectLogin();
    }
  };

  render() {
    return (
      <main>
        {React.Children.toArray(this.props.children)}
      </main>
    );
  }

  static propTypes = {
    children: React.PropTypes.node,
  };
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => dispatch(setToken(token)),
    redirectHome: () => dispatch(push('/home')),
    redirectLogin: () => dispatch(push('/')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
