import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Content from '../components/Content.jsx';
import AudioBox from '../components/AudioBox.jsx';

describe('<Content />', () => {
  const data = [{
    created: '2017-02-21T09:50:21.441815Z',
    duration: 1575,
    final_script: 'some script',
    language: 'en-GB',
    rating: 2,
    url: 'some url',
  }];
  const foo = [{ foo: 'bar' }];

  it('renders without exploding', () => {
    mount(<Content data={ data } />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Content data={ data } />);
    expect(wrapper.props().data).to.equal(data);
    wrapper.setProps({ data: foo });
    expect(wrapper.props().data).to.equal(foo);
  });

  it('renders one <AudioBox /> component', () => {
    const wrapper = shallow(<Content data={ data } />);
    expect(wrapper.find(AudioBox)).to.have.length(1);
  });
});
