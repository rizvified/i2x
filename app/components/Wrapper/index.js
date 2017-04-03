/**
*
* Wrapper
*
*/

import React from 'react';


class Wrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

Wrapper.propTypes = {

};

export default Wrapper;
