/**
*
* Catalogue
*
*/

import React from 'react';
import BookBox from 'components/BookBox';

class Catalogue extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div className="catalogue">
        <h3 className="catalogue_heading">
          Catalogue
        </h3>
        {data.map((book, index) => <BookBox details={book} key={index} />)}
      </div>
    )
  }
}

Catalogue.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Catalogue;
