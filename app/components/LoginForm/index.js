/**
*
* LoginForm
*
*/

import React from 'react';
import { LocalForm, Control } from 'react-redux-form';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(form) {
    this.props.login(form.username, form.password)
  };

  render() {
    return (
      <div className="container">
        <LocalForm className="form-horizontal"
          onSubmit={(values) => this.handleSubmit(values)}
        >
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4">
                <Control className="form-control" type="text" id="username" model=".username" placeholder="Username" required/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4">
                <Control className="form-control" type="password" id="password" model=".password" placeholder="Password" required/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4">
                <button className="btn btn-block btn-default submit" type="submit">Log in</button>
              </div>
            </div>
        </LocalForm>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func,
};

export default LoginForm;
