import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import AdvertiseBar from '../AdvertiseBar/AdvertiseBar';

import '../../public/styles/bootstrap.min.css';
import { theme, Inner, GlobalStyle } from './GlobalTheme';

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className="container">
        <Meta />
        <GlobalStyle />
        <AdvertiseBar />
        <Header />
        <Inner>{this.props.children}</Inner>
      </ThemeProvider>
    );
  }
}

export default Layout;
