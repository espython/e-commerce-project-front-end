import React, { Component } from 'react';
import styled from 'styled-components';

import BottomNav from './BottomNav/BottomNav';
import TopNav from './topNav/TopNavComp';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="container-fluid">
        {/* upper nav */}
        <TopNav />
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
`;
