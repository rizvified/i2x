/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectHomePage, makeSelectContent } from './selectors';
import messages from './messages';

import { logOut } from 'containers/App/actions';
import { fetchContent } from './actions';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import Content from 'components/Content';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if(this.props.content == 0) {
      this.props.getContent();
    }
  }

  render() {
    return (
      <Wrapper>
        <Header logout={this.props.logout}/>
        <Content />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {

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
