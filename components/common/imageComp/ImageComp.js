import React from 'react';
import styled from 'styled-components';

function ImageComp({ imgSrc, isAdded, size }) {
  return (
    <Wrapper imgSrc={imgSrc} size={size}>
      <button className="btn btn-primary">+</button>
      <h4 className="my-3">
        {size < 2 ? `Add another Image` : `Add Main Product Image`}
      </h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.size * 8}rem;
  height: ${props => (props.size + 1) * 8}rem;
  background-image: ${props => (props.imgSrc ? props.imgSrc : null)};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.lightGray};

  .btn {
    width: ${props =>
      props.size < 2 ? props.size * 3 : props.size * 1.5}rem !important;
    height: ${props =>
      props.size < 2 ? props.size * 3 : props.size * 1.5}rem !important;
    border-radius: 50%;
    /* border: 2px solid; */
    font-size: ${props =>
      props.size < 2 ? props.size * 1.5 : props.size * 0.75}rem;
  }
  h4 {
    /* color: blue; */
    text-align: center;
    font-size: ${props =>
      props.size < 2 ? props.size * 1 : props.size * 0.75}rem;
  }
`;

export default ImageComp;
