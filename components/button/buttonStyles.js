import Styled, { css } from 'styled-components';

const btnStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  max-width: 68rem;
  /*
  height: 5rem;
  border-radius: 50%; */
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;
  font-size: 2.5rem;
`;

/* Life is too short to */

// font-family: IBM Plex Sans;
// font-style: normal;
// font-weight: 600;
// font-size: 48px;
// line-height: 56px;
// /* or 117% */
// text-align: center;
// text-transform: uppercase;

// color: #382802;

export const ButtonWrapper = Styled.div`
  display:flex;
  justify-content:center;
  text-align:center;
  padding:1.6rem;
  background-color:rgba(245, 245, 245, 0.25) !important;
  span{
    font-family: IBM Plex Sans;
    font-style: italic;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2.7rem;
    text-align: center;
    color:${props => props.theme.kashmerColor} !important;
  }
  h1{
    font-size:4.8rem;
    font-style: normal;
    font-weight: 600;
  }
  .btn{
    width:16.4rem;
    background-color:${props => props.theme.mainDark} !important;
    color:${props => props.theme.kashmerColor};
    font-size:1.6rem;
    font-style: normal;
    font-weight: 600;
    margin-top:2.4rem;

  }

/* left:50%; */
  ${btnStyles}
`;
