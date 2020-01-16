import React, { Component } from 'react';
import Styled from 'styled-components';

import Badge from './saleBadge';
import PriceComp from './PriceComp';

export default class Details extends Component {
  render() {
    return (
      <Wrapper className="col col-lg-5 d-flex">
        <div className="header">
          <div className="d-flex flex-row justify-content-between  align-items-center pr-3">
            <div>
              <span>Women</span>
              <h3>midi dress made of opulent lace</h3>
            </div>
            <Badge className="badge" />
          </div>
          <div className="line"></div>
          <PriceComp />
          <div className="line"></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Wrapper>
    );
  }
}

const Wrapper = Styled.div`
  background-color:${props => props.theme.mainLight};
  .header{
    width:100%;
    padding-top:1rem;
  }
  span{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
  }
  h3{
    text-transform: capitalize;
  }
  .line{
    height:0.2rem;
    background-color:${props => props.theme.lightGray};
    margin-top: 1rem;
  }
`;
