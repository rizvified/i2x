/**
*
* AudioBox
*
*/

import React from 'react';

class AudioBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let { data } = this.props;

    let duration = moment(data.duration).second();
    let date = moment(data.created).tz('Europe/Berlin').format('MMMM Do YYYY');

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
              <div className="date col-offset-3 col-md-5 no-pad pull-right">
                <p className="pull-right">
                  {date}
                </p>
              </div>
            </div>
          </div>
          <div className="row no-margin">
            <p className="transcript">{data.final_script}</p>
          </div>
          <div className="row no-margin">
              <p className="duration no-margin">
                Duration: {duration} {duration > 1 && "minutes"} {duration < 2 && "minute"}
              </p>
            </div>
          </section>
          <section className="audio">
            <audio controls>
              <source src={data.url} type="audio/mpeg"  preload="auto" />
              Your browser does not support the audio tag!
            </audio>
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
