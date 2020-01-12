import Styled from 'styled-components';

export const BottomNavWrapper = Styled.div`
  
  
  .nav-link{
    color:${props => props.theme.color3} !important;
    transition: color 0.5s;
    transition-timing-function: ease-in-out;
    &:hover {
      color:${props => props.theme.color4} !important;
    }
  }
    
.nav-item{
  border-bottom: 2px solid transparent;
  font-weight: 500;
  margin-right:2rem;
  transition: border-bottom 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
  border-bottom: 2px solid ${props => props.theme.color4};
}
  /* a:hover {
  border-bottom: 2px solid black;
} */
  


`;
