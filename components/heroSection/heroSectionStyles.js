import Styled, { css } from 'styled-components';

const btnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;
  font-size: 2.5rem;
  &:hover {
    background: rgba(0, 0, 0, 0.36);
    cursor: pointer;
    color: whitesmoke;
  }
`;

export const HeroSectionWrapper = Styled.div`
  
  position:relative;
  width:100%;
  height:67rem;
  display:flex;
  align-items:center;
  overflow:hidden;
  background:black;

  .slide{
    min-width:100%;
    height:100%;
    transition:0.5s;
    overflow:hidden;
  }

  #goLeft{
   left:0;
   ${btnStyles};
   margin-left: 2rem;
  }
  #goRight{
    right:0; 
    ${btnStyles};
    margin-Right: 2rem;


  }

`;
