import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Form from '../app/components/Form.jsx';

describe('<Form />', () => {
  const foo = 'foo';
  const bar = 'bar';

  it('renders without exploding', () => {
    shallow(<Form />);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Form props={ foo } />);
    expect(wrapper.props().props).to.equal(foo);
    wrapper.setProps({ props: 'bar' });
    expect(wrapper.props().props).to.equal(bar);
  });

  it('renders an `.login_form`', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('.login_form')).to.have.length(1);
  });

  it('renders the error', () => {
    const wrapper = render(<Form error='unique' />);
    expect(wrapper.text()).to.contain('unique');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Form handleSubmit={ onButtonClick } />,
   );
    wrapper.find('form').simulate('submit');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
