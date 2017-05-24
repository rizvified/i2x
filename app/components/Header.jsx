import React from 'react';

const Header = ({ logout }) => (
  <header className='navigation'>
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
        </div>
        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <button className='btn btn-sm logoutBtn' type='button' onClick={ logout }>
                <i className='fa fa-power-off' />
                  Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);


Header.propTypes = {
  logout: React.PropTypes.func,
};

export default Header;
