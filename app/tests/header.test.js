import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Header from '../components/Header.jsx';


describe('<Header />', () => {
  const foo = () => true;
  const bar = () => false;

  it('renders without exploding', () => {
    shallow(<Header />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Header logout={ foo } />);
    expect(wrapper.props().logout).to.equal(foo);
    wrapper.setProps({ logout: bar });
    expect(wrapper.props().logout).to.equal(bar);
  });

  it('renders an `.header`', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.navigation')).to.have.length(1);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Header logout={ onButtonClick } />,
   );
    wrapper.find('.logoutBtn').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
