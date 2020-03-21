import React, { Component } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import SignInWrapper from './signInStyles';

export default class SignInComp extends Component {
  render() {
    const { show, setShow } = this.props;
    console.log('show', show);
    return (
      <SignInWrapper show={show}>
        <div id="signupModal" className="modal">
          <form action="POST" className="container modal-content">
            <IoMdCloseCircleOutline
              className="close-icon"
              onClick={() => setShow(false)}
            />
            <fieldset>
              <div className="d-flex justify-content-between">
                <h1>Sign In</h1>
              </div>

              <p>Welcome back</p>
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
                  name="psw"
                  required
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="signup-btn btn  btn-dark">
                  Sign In
                </button>
              </div>
              <hr />

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
      </SignInWrapper>
    );
  }
}
