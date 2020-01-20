import React, { Component } from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import SearchBar from '../searchBar/SearchBar';
import BottomNav from './BottomNav/BottomNav';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="container-fluid">
        {/* upper nav */}
        <div className="top-nav py-4">
          <h2>Cotton Store</h2>
          <SearchBar className="search-bar" />
          <div className="right-panel">
            <MdAccountCircle className="account-icon" />
            <div className="v-bar">|</div>
            <div className="cart-icon">
              <FiShoppingCart />
            </div>
          </div>
        </div>
        {/* bottom nav */}
        <BottomNav />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: '#FFFFFF' !important;
  padding: 0 2rem 0 2rem;
  border-bottom: 0.1rem solid ${props => props.theme.lightGray};

  /* height: 18rem !important; */

  /* top Nav */
  .top-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: 'Satisfy', cursive;
      font-size: 2.5rem;
      font-weight: bold;
      color: ${props => props.theme.orange};
    }

    .right-panel {
      display: flex;
      align-items: center;
      .account-icon {
        font-size: 2.8rem;
        color: #212121;
      }
      .v-bar {
        margin: 0rem 1.5rem 0rem 1.5rem;
      }
      .cart-icon {
        display: flex;
        align-items: center;
        font-size: 3rem;
      }
    }
  }
`;
