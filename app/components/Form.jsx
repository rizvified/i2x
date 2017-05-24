import React from 'react';

const Form = ({ username, password, error, handleSubmit, handleUsername, handlePassword }) => (
  <form onSubmit={ handleSubmit } className='form-horizontal login_form'>
    <div className='form-group'>
      <div className='col-md-offset-4 col-md-4 col-xs-12'>
        <input className='form-control' type='text' id='username' value={ username } onChange={ handleUsername } placeholder='Username' required />
      </div>
    </div>
    <div className='form-group'>
      <div className='col-md-offset-4 col-md-4 col-xs-12'>
        <input className='form-control' type='password' id='password' value={ password } onChange={ handlePassword } placeholder='Password' required />
      </div>
    </div>
    <div className='form-group'>
      <div className='col-md-offset-4 col-md-4 col-xs-12'>
        <button className='btn btn-block btn-default submit submitBtn' type='submit'>Log in</button>
        {
                 error !== '' &&
                 <p className='login_error no-margin'>
                   {error}
                 </p>
               }
      </div>
    </div>
  </form>
);

Form.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  error: React.PropTypes.string.isRequired,
  handleUsername: React.PropTypes.func.isRequired,
  handlePassword: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default Form;
