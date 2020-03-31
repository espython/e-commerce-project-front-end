import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

import SearchBar from '../../searchBar/SearchBar';
import SignOut from '../../SignOut';
import User from '../../User';
import { logout } from '../../../lib/auth';

export default class TopNavComp extends Component {
  render() {
    const { show, setShow } = this.props;
    return (
      <Wrapper className="top-nav d-flex justify-content-around align-items-center py-4">
        <h2>
          <Link href="/">
            <a>Cotton Store</a>
          </Link>
        </h2>
        <SearchBar className="search-bar" />
        <User>
          {({ user }) => (
            <div className="right-panel">
              {!user ? (
                <button
                  className=" d-flex align-items-center login-btn"
                  onClick={() => setShow(!show)}
                >
                  <p className="mx-2 ">login</p>
                  <AiOutlineLogin className="login-icon" />
                </button>
              ) : (
                <div className="d-flex justify-content-center align-items-center login-btn">
                  <SignOut name={user.name} />
                </div>
              )}

              <div className="v-bar">|</div>
              <div className="cart-icon">
                <FiShoppingCart />
              </div>
            </div>
          )}
        </User>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* top Nav */
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 a {
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${props => props.theme.orange};
  }

  .right-panel {
    display: flex;
    align-items: center;

    .login-btn {
      background: none;
      border: none;
      :hover {
        color: ${({ theme }) => theme.orange};
      }
      .login-icon {
        font-size: 2.8rem;

        cursor: pointer;
      }
    }
    .account-icon {
      font-size: 2.8rem;
      color: #212121;
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.orange};
      }
    }
    .v-bar {
      margin: 0rem 1.5rem 0rem 1.5rem;
    }
    .cart-icon {
      display: flex;
      align-items: center;
      font-size: 3rem;
      cursor: pointer;
      :hover {
        color: ${({ theme }) => theme.orange};
      }
    }
    .user-name {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }
`;
