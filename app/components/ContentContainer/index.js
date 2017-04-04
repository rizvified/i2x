/**
*
* ContentContainer
*
*/

import React from 'react';

import Spinner from 'react-spinkit';
import AudioBox from 'components/AudioBox';


class ContentContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let { data } = this.props;

    return (
      <div className="content_container">
        {
          this.props.fetching == false ?
          <Spinner spinnerName="rotating-plane" className="loading_indicator" /> :
          data.map((content, index) => <AudioBox data={content} key={index}/>)
        }
      </div>
    );
  }
}

ContentContainer.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default ContentContainer;
