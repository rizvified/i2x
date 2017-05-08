import React from 'react';

import AudioBox from './AudioBox.jsx';

function Content(props) {
  const { data } = props;
  return (
    <div className='content_container'>
      {
        data.map((content, index) => <AudioBox data={ content } key={ index } />)
      }
    </div>
  );
}

Content.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Content;
