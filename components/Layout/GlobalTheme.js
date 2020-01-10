import styled, { createGlobalStyle, css } from 'styled-components';

// import fontFile from '../../public/IBMPlexSans-Regular.woff2';

export const theme = {
  maxWidth: `1400px`,
  petroleumColor: `#8F8977`,
  mainColor: `#FFFFFF`,
  mainDarkColor: `#212121`,
  accentColor: `#DF0052`
};

/**
 * Global styles and theming for the web site
 */

/* @font-face {
 font-family: 'IBM Plex Sans';
 src: url('../../public/IBMPlexSans-Regular.woff2') format('woff2');
 font-weight: normal;
 font-style: 400;
 font-display: fallback;
}; */

/* font-family: 'Foo';
src: url('/path/to/foo.woff') format('woff');
font-style: normal;
font-weight: 400;
font-display: fallback; */
// @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,500i,600,600i,700,700i&display=swap');

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,600i,700&display=swap');
   
   html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 600;
    font-display: fallback;
    background: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainDarkColor};
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0rem !important;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  p{
    font-weight:500 !important;
    margin-bottom:0 !important;
  }
`;

export const StyledPage = styled.div`
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainDarkColor};
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
