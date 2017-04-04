/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectContent, makeSelectIsFetching } from './selectors';

import { logOut } from 'containers/App/actions';
import { fetchContent } from './actions';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import ContentContainer from 'components/ContentContainer';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
      this.props.getContent();
  }

  render() {
    return (
      <Wrapper>
        <Header logout={this.props.logout}/>
        <ContentContainer data={this.props.content} indicator={this.props.fetching}/>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  content: React.PropTypes.arrayOf(React.PropTypes.object),
  fetching: React.PropTypes.oneOf([true, false]),
  logout: React.PropTypes.func,
  getContent: React.PropTypes.func,
  // startFetching: React.PropTypes.func,
  // doneFetching: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectContent(),
  fetching: makeSelectIsFetching(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logOut()),
    getContent: () => dispatch(fetchContent()),
    // startFetching: () => dispatch(setFetching()),
    // doneFetching: () => dispatch(removeFetching()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
