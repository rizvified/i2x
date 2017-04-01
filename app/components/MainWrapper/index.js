/**
*
* MainWrapper
*
*/

import React from 'react';
// import styled from 'styled-components';


class MainWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

MainWrapper.propTypes = {

};

export default MainWrapper;
