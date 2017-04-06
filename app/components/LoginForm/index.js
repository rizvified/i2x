/**
*
* LoginForm
*
*/

import React from 'react';

class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
   super(props);

   this.handleUsername = this.handleUsername.bind(this);
   this.handlePassword = this.handlePassword.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleUsername(event) {
   this.props.removeError();
   this.props.set_username(event.target.value);
 }

 handlePassword(event) {
   this.props.removeError();
   this.props.set_password(event.target.value);
 }

 handleSubmit(event) {
    event.preventDefault();
    this.props.login();
 }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-horizontal login_form">
          <div className="form-group">
            <div className="col-md-offset-4 col-md-4 col-xs-12">
              <input className="form-control" type="text" id="username" value={this.props.username} onChange={this.handleUsername} placeholder="Username" required/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-4 col-md-4 col-xs-12">
              <input className="form-control" type="password" id="password" value={this.props.password} onChange={this.handlePassword} placeholder="Password" required/>
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
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func,
  remove: React.PropTypes.func,
};

export default LoginForm;
