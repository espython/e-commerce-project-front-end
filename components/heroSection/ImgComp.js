import React from 'react';
import Styled from 'styled-components';
import ButtonComp from '../button/ButtonComp';

const ImgComp = ({ src }) => {
  return (
    <StylesWrapper imageURL={src}>
      <ButtonComp />
    </StylesWrapper>
  );
};

const StylesWrapper = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    background-image: url(${props => props.imageURL});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `;

export default ImgComp;
