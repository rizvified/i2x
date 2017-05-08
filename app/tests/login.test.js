import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Login from '../containers/Login.jsx';
import Form from '../components/Form.jsx';

describe('<Login />', () => {
  beforeAll(() => {
    global.localStorage = {
      i2x_token: 'someToken',
      setItemItem() {
        return {
          i2x_token: 'someToken',
        };
      },
    };
  });

  it('renders without exploding', () => {
    shallow(<Login />);
  });

  it('allows us to set state', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().username).to.equal('');
    wrapper.setState({ username: 'foo' });
    expect(wrapper.state().username).to.equal('foo');
  });

  it('renders one <Form /> component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(Form)).to.have.length(1);
  });
});
