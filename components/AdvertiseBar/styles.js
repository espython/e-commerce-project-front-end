import Styled from 'styled-components';

const Wrapper = Styled.div`

  height:3rem;
  background: ${props => props.theme.petroleumColor};
  color: ${props => props.theme.mainColor} !important;
  .car{
    font-size:1.8rem;
  }
  p{
    font-weight:500 !important;
  }
  a{
    border-bottom: 2px solid;
    cursor: pointer;
  }
  

`;

export default Wrapper;
