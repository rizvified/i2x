import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from '../containers/App.jsx';

describe('<App />', () => {
  beforeAll(() => {
    global.localStorage = {
      i2x_token: 'someToken',
      getItem() {
        return 'someToken';
      },
    };
  });

  it('renders without exploding', () => {
    shallow(<App />);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <App>
        <div className='unique' />
      </App>,
   );
    expect(wrapper.contains(<div className='unique' />)).to.equal(true);
  });
});
