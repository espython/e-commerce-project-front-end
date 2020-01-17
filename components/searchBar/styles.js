import Styled from 'styled-components';

const StylesWrapper = Styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:10rem;
  margin-left:10rem;
  background-color:#E0F7FA;
  border-radius: 50px;
 
  flex:2;
 

  

  input{
    padding-left:2rem;
    padding-right:2rem;
    border:none;
    background-color:#E0F7FA;
    text-decoration: none;
    height:5rem;
    /* border-radius: 25px; */
    border-top-left-radius: 5rem;
    border-bottom-left-radius: 5rem;
    transition: background-color 0.1s, border-top 0.1s, border-bottom 0.1s, border-left 0.1s;
    transition-timing-function:ease-in-out;
    flex:2;
    &:focus{
      background-color:#FFFFFF;
      border-top:0.2rem solid ${props => props.theme.orange};
      border-bottom:0.2rem solid ${props => props.theme.orange};
      border-left:0.2rem solid ${props => props.theme.orange};
    }
  }

  .btn-search {
    background-color: transparent;
    color:${props => props.theme.color1};
    border:none ;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    height:5rem;
    font-size:2rem;
    padding-right:2rem;
    padding-left:2rem;
    cursor: pointer;
    outline:none;
    &:hover{
      background-color: #81D4FA;
    }
    
  }
  .btn-focus{
      background-color: ${props => props.theme.color2};
      color:#F5F5F5;
    }



`;

export { StylesWrapper };
