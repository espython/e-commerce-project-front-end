import Styled from 'styled-components';

export const DropdownWrapper = Styled.div`

    /* ${ItemWrapper}:hover & {
      display:block;
    } */
    left:0;
    right:0;
    margin-top:0.2rem;
    transition: all 0.5s ease-in-out;
    visibility:hidden;
    opacity:0;
    position: absolute;
    border-top:none;
    
    /* transition-timing-function: ease-in-out; */
    background-color: #f1f1f1;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    
    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #ddd;
      }
    }
`;

export const ItemWrapper = Styled.li`
  /* padding:0 1rem; */
  border-bottom: 2px solid transparent;
  font-weight: 500;
  margin: 0 1rem;
  transition: border-bottom 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.red} !important;
  }
  &:hover ${DropdownWrapper} {
      visibility:visible;
      opacity:1;
      
     
    }
    
  }

  .nav-link{
    color:${props => props.theme.darkGreen} !important;
    transition: color 0.5s;
    transition-timing-function: ease-in-out;
    &:hover {
      color:${props => props.theme.red} !important;
      
    }
  }
  

`;

export const BottomNavWrapper = Styled.div`

  position: relative;
  display: inline-block;
  padding-left:0 !important;
  padding-right:0 !important;
  
    /* Dropdown Button */
  .dropbtn {
    font-size: 16px;
    border: none;
  }

  
  
  


`;
