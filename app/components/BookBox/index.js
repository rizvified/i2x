/**
*
* BookBox
*
*/

import React from 'react';
import Book from '../../images/img.jpg';


class BookBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="book_box">
        <div className="col-md-3">
          <div className="bbox_outer">
            <div className="bbox_inner">
              <img src={Book} alt="book" />
              <h4 className="b_title">{this.props.details.title}</h4>
              <h5 className="b_author">{this.props.details.author}</h5>
              <h4 className="b_price">${this.props.details.price}</h4>
              <button type="button" className="btn btn-default">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookBox.propTypes = {

};

export default BookBox;
