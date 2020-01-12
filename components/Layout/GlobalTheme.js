import styled, { createGlobalStyle } from 'styled-components';

// import fontFile from '../../public/IBMPlexSans-Regular.woff2';

// export const theme = {
//   maxWidth: `1400px`,
//   mainYellow: `#FF9F1C`,
//   mainLight: `#FDFFFC`,
//   mainDark: `#011627`,
//   redAccent: `#E71D36`,
//   blueAccent: `#2EC4B6`,
//   grayAccent: `#E0E0E0`
// };

export const theme = {
  maxWidth: `1400px`,
  mainLight: `#FDFFFC`,
  mainDark: `#011627`,
  color1: 'rgba(23, 33, 33, 1)',
  color2: '#f1641e',
  color3: 'rgba(71, 117, 134, 1)',
  color4: 'rgba(244, 152, 163, 1)',
  color5: 'rgba(212, 219, 205, 1)',
  kashmerColor: '#fdebd2',
  lightGreenColor: 'rgb(212, 233, 215)'
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
  @import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

   html {
     height:100vh;
     box-sizing: border-box;
     font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    height:100%;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 600;
    font-display: fallback;
    background-color: ${props => props.theme.mainLight};
    color: ${props => props.theme.mainDark};
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0rem !important;
  }
  a {
    text-decoration: none !important;
    color: ${theme.mainDarkColor} !important;
  }
  p{
    font-weight:500 !important;
    margin-bottom:0 !important;
  }
  #__next{
    height:100%;
  }
`;

export const StyledPage = styled.div`
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainDarkColor};
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  /* padding: 2rem; */
`;
