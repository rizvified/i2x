/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className="navigation">
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to='/' activeStyle={{
                  color: "#fff",
              }}>Home</Link>
            </li>
          </ul>
        </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to='/history' activeStyle={{
              color: "#fff",
          }}>History</Link>
        </li>
        <li>
          <Link to='/admin' activeStyle={{
              color: "#fff",
          }}>Admin</Link>
        </li>
      </ul>
    </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
