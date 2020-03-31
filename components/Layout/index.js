import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import AdvertiseBar from '../AdvertiseBar/AdvertiseBar';

import { theme, Inner, GlobalStyle } from './GlobalTheme';
import Register from '../signupAndsignIn';

// close signup modal
const closeModal = (show, setShow) => {
  const modal = document.getElementById('signupModal');

  window.onclick = event => {
    if (event.target === modal) {
      modal.style.display = 'none';

      setShow(!show);
    }
  };
};

const Layout = props => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    closeModal(show, setShow);
  });
  return (
    <ThemeProvider theme={theme} className="container-fluid">
      <Meta />
      <GlobalStyle />
      <AdvertiseBar />
      <Header show={show} setShow={setShow} />
      {show && <Register show={show} setShow={setShow} />}
      {<Inner>{props.children}</Inner>}
    </ThemeProvider>
  );
};

export default Layout;
