import React, { Component } from 'react';
import Styled from 'styled-components';
import DropDownComp from './DropDownComp';

export default class DropDownMenu extends Component {
  render() {
    return (
      <Wrapper>
        <a className="nav-link active dropbtn" href="#">
          New Weekly
        </a>
        {/* <DropDownComp /> */}
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
  
  position: relative;
  display: inline-block;
    /* Dropdown Button */
  .dropbtn {
    font-size: 16px;
    border: none;
  }

  &:hover {
    .dropdown-content {
        display: block;
        /* border-top: 0.2rem solid ${props => props.theme.red} !important; */
      }
    }
  .dropdown-content{
    margin-top:0.2rem;
    display: none;
    position: absolute;
    border-top:none;
    transition: display 2s ease-in-out;
    /* transition-timing-function: ease-in-out; */
    background-color: #f1f1f1;
    width: 100VW;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    &:hover {
      display: block;
    }
    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #ddd;
      }
    }
  }
  

  
`;
