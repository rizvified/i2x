import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Home from '../containers/Home.jsx';
import Header from '../components/Header.jsx';

describe('<Home />', () => {
  beforeAll(() => {
    global.localStorage = {
      i2x_token: 'someToken',
      getItem() {
        return 'someToken';
      },
      removeItem() {
        return '';
      },
    };
  });
  const data = [{
    created: '2017-02-21T09:50:21.441815Z',
    duration: 1575,
    final_script: 'some script',
    language: 'en-GB',
    rating: 2,
    url: 'some url',
  }];

  it('renders without exploding', () => {
    shallow(<Home />);
  });

  it('allows us to set state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state().content).to.equal(null);
    wrapper.setState({ content: data });
    expect(wrapper.state().content).to.equal(data);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home />);
    expect(Home.prototype.componentDidMount).to.have.property('callCount', 1);
    Home.prototype.componentDidMount.restore();
  });

  it('renders one <Header /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
