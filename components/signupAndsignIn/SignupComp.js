import React, { Component } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SignupWrapper from './signupStyles';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    register(email: $email, name: $name, password: $password) {
      message
    }
  }
`;

export default class SignupComp extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { show, setSignUp, setShow } = this.props;
    console.log('show', show);
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => (
          <SignupWrapper show={show}>
            <div id="signupModal" className="modal">
              <form
                method="POST"
                className="container modal-content"
                onSubmit={async e => {
                  e.preventDefault();
                  await signup();
                  this.setState({ name: '', email: '', password: '' });
                }}
              >
                <IoMdCloseCircleOutline
                  className="close-icon"
                  onClick={() => setShow(false)}
                />
                <fieldset>
                  <div className="d-flex justify-content-between">
                    <h1>Sign Up</h1>
                    <button
                      type="button"
                      className="btn btn-outline-dark mr-5"
                      onClick={() => setSignUp(!show)}
                    >
                      <h1>Sign In</h1>
                    </button>
                  </div>

                  <p>Please fill in this form to create an account.</p>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.saveToState}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <b>First Name</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={this.state.name}
                      onChange={this.saveToState}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="psw">
                      <b>Password</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.saveToState}
                      required
                    />
                  </div>

                  <p>
                    By creating an account you agree to our
                    <a href="#" style={{ color: 'dodgerblue' }}>
                      Terms & Privacy
                    </a>
                    .
                  </p>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="signup-btn btn  btn-lg">
                      Sign Up
                    </button>
                  </div>
                  <div className="mt-4">
                    <hr />
                  </div>

                  <div className="d-flex justify-content-center">
                    <h1>OR</h1>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="facebook-btn btn btn-outline-primary"
                    >
                      <FaFacebookSquare className="icon" />
                      SignIn with Facebook
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </SignupWrapper>
        )}
      </Mutation>
    );
  }
}
