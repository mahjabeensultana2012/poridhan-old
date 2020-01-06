import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I don't have an account</h1>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onchange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onchange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onchange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onchange={this.handleChange}
            label="Confirm Password"
            required
          />
        </form>
      </div>
    );
  }
}
