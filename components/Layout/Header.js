import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

import BottomNav from './BottomNav/BottomNav';
import TopNav from './topNav/TopNavComp';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

class Header extends Component {
  render() {
    const { show, setShow } = this.props;

    return (
      <HeaderWrapper className="container-fluid">
        {/* upper nav */}
        <TopNav show={show} setShow={setShow} />
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

export default Header;
