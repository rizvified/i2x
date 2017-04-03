/**
*
* AudioBox
*
*/

import React from 'react';
// import styled from 'styled-components';


class AudioBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let { data } = this.props;
    let duration = Math.round(data.duration/60);
    let date = data.created.slice(0, 10);
    let ratings = [];

    for(let i=0; i < data.rating; i++) {
      ratings.push(<i className="fa fa-star" />)
    };

    let stars = ratings.map((star) => star);

    return (
      <div className="col-md-4 col-xs-12">
        <div className="audio_box">
          <section className="details">
          <div className="row no-margin">
            <div className="header col-md-12 no-pad">
              <div className="rating col-md-4 no-pad pull-left">
                {stars}
              </div>
              <div className="col-offset-4 col-md-4 no-pad pull-right">
                <p className="duration pull-right">
                  {duration} Minutes
                </p>
              </div>
            </div>
          </div>
            <div className="transcript">
              <p>{data.final_script}</p>
            </div>
          </section>
          <section className="audio">
            <audio controls>
              <source src={data.url} type="audio/mpeg"  preload="auto" />
              Your browser does not support the audio tag!
            </audio>
          </section>
          <section className="date">
            <p>
              Created: {date}
            </p>
          </section>
        </div>
      </div>
    );
  }
}

AudioBox.propTypes = {
  data: React.PropTypes.object,
};

export default AudioBox;
