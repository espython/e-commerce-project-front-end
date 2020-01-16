import React from 'react';
import Styled from 'styled-components';

export default function AdvertiseRow() {
  return (
    <Wrapper className="row d-flex justify-content-between align-items-center px-5">
      <p>Sign up for news AND Get 20% off</p>
      <button type="button" className="btn btn-outline-dark">
        GET STARTED <span>&gt;</span>
      </button>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  background-color: #F3F3F3;
  margin:4rem 0 5.9rem 0;
  height:8.2rem;
  p{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 25px;
  }
  .btn{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 21px;
    border:1px solid black !important;

    
  }
  span{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    margin-left:2rem;
    }



`;
