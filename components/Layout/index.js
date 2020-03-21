import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import AdvertiseBar from '../AdvertiseBar/AdvertiseBar';

import '../../public/styles/bootstrap.min.css';
import { theme, Inner, GlobalStyle } from './GlobalTheme';
import Register from '../signupAndsignIn';

class Layout extends Component {
  // componentDidMount() {
  //   this.closeModal();
  // }

  // // close signup modal
  // closeModal = () => {
  //   const modal = document.getElementById('signupModal');
  //   console.log('modaaaaaaaaaaaaal', modal);
  //   window.onclick = event => {
  //     console.log('modaaaaaaaaaaaaal', event.target);
  //     if (event.target == modal) {
  //       modal.style.display = 'none';
  //       console.log('modaaaaaaaaaaaaal');
  //       this.setState({ show: false });
  //     }
  //   };
  // };
  render() {
    return (
      <ThemeProvider theme={theme} className="container-fluid">
        <Meta />
        <GlobalStyle />
        <AdvertiseBar />
        <Header />
        <Register />
        {<Inner>{this.props.children}</Inner>}
      </ThemeProvider>
    );
  }
}

export default Layout;
