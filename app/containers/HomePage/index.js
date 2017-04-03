/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectContent } from './selectors';

import { logOut } from 'containers/App/actions';
import { fetchContent } from './actions';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import AudioBox from 'components/AudioBox';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
      this.props.getContent();
  }

  render() {
    let { content } = this.props;

    return (
      <Wrapper>
        <Header logout={this.props.logout}/>
        {
          content.map((details, index) => <AudioBox data={details} key={index}/>)
        }
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  content: React.PropTypes.arrayOf(React.PropTypes.object),
  logout: React.PropTypes.func,
  getContent: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logOut()),
    getContent: () => dispatch(fetchContent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
