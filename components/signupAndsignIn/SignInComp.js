import React, { Component } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';
import Router from 'next/router';

import SignInWrapper from './signInStyles';
import { CURRENT_USER_QUERY } from '../User';

const LOGIN_MUTAION = gql`
  mutation LOGIN_Query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
    }
  }
`;

export default class SignInComp extends Component {
  state = {
    password: '',
    email: '',
    error: {},
    isLogin: false
  };

  // componentDidMount() {
  //   if (this.state.isLogin) {
  //     Router.push('/home');
  //   }
  //   const token = Cookie.get('token');
  //   console.log('token 3', token);
  // }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e, login, client, setShow) => {
    e.preventDefault();
    // console.log('Error', error.message);

    try {
      await client.cache.reset();
      const { data } = await login();

      if (data.login.email) {
        this.setState({ name: '', email: '', password: '' });
        setShow(false);
        Router.push('/home');
      }
    } catch (error) {
      console.log('catchError', error.message);
    }
  };

  render() {
    const { show, setShow } = this.props;

    return (
      <Mutation
        mutation={LOGIN_MUTAION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { client, loading, error }) => (
          <SignInWrapper show={show}>
            <div id="signupModal" className="modal">
              <form
                action="POST"
                className="container modal-content"
                onSubmit={e => this.handleSubmit(e, login, client, setShow)}
              >
                <IoMdCloseCircleOutline
                  className="close-icon"
                  onClick={() => setShow(false)}
                />
                <fieldset>
                  <div className="d-flex justify-content-between">
                    <h1>Sign In</h1>
                  </div>

                  <p>Welcome back</p>
                  {error && <p>Error on email or password</p>}
                  <hr />
                  <div className="form-group">
                    <label htmlFor="email">
                      <b>Email</b>
                    </label>
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={this.state.email}
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
        )}
      </Mutation>
    );
  }
}
