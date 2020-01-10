import styled, { createGlobalStyle } from 'styled-components';

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
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,500i,600,600i,700,700i&display=swap');
  
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
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: normal;
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
