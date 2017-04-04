/**
*
* LoginForm
*
*/

import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(form) {
    this.props.login(form.username, form.password)
  };

  handleChange() {
    this.props.removeError()
  };

  render() {
    return (
      <div className="container">
        <LocalForm className="form-horizontal login_form"
          onSubmit={(values) => this.handleSubmit(values)}
          onChange={() => this.handleChange()}
        >
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4 col-xs-12">
                <Control className="form-control" type="text" id="username" model=".username" placeholder="Username" required/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4 col-xs-12">
                <Control className="form-control" type="password" id="password" model=".password" placeholder="Password" required/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-4 col-md-4 col-xs-12">
                <button className="btn btn-block btn-default submit submitBtn" type="submit">Log in</button>
                {
                  this.props.error != null &&
                  <p className="login_error no-margin">
                    {this.props.error}
                  </p>
                }
              </div>
            </div>
        </LocalForm>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func,
  removeError: React.PropTypes.func,
};

export default LoginForm;
