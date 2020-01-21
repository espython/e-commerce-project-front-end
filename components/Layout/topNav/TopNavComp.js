import React, { Component } from 'react';
import Styled from 'styled-components';

import { FiShoppingCart } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';

import SearchBar from '../../searchBar/SearchBar';

export default class TopNavComp extends Component {
  render() {
    return (
      <div className="top-nav d-flex justify-content-center align-items-center py-4">
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
    );
  }
}

const Wrapper = Styled.div`

   /* top Nav */
   .top-nav {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; */

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
