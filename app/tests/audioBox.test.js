import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AudioBox from '../components/AudioBox.jsx';

describe('<AudioBox />', () => {
  const data = {
    created: '2017-02-21T09:50:21.441815Z',
    duration: 1575,
    final_script: 'some script',
    language: 'en-GB',
    rating: 2,
    url: 'some url',
  };
  const foo = { foo: bar };
  const bar = { bar: foo };

  it('renders without exploding', () => {
    shallow(<AudioBox data={ data } />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<AudioBox data={ foo } />);
    expect(wrapper.props().data).to.equal(foo);
    wrapper.setProps({ data: bar });
    expect(wrapper.props().data).to.equal(bar);
  });

  it('renders an `.audio_box`', () => {
    const wrapper = shallow(<AudioBox data={ data } />);
    expect(wrapper.find('.audio_box')).to.have.length(1);
  });
});
