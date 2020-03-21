import React, { useState } from 'react';
import styled from 'styled-components';

const fileInputTrigger = id => {
  document.getElementById(id).click();
};

function ImageComp({ imgSrc, size, uploadFile, name, images }) {
  console.log('img Name ==> ', name);

  return imgSrc ? (
    <ImageWrapper src={imgSrc} size={size} />
  ) : (
    <Wrapper imgSrc={imgSrc} size={size}>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          fileInputTrigger(name);
        }}
      >
        +
        <input
          type="file"
          id={name}
          name={name}
          onChange={e => uploadFile(e, images)}
          style={{ display: 'none' }}
        />
      </button>
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
  /* background-image: ${props => (props.imgSrc ? props.imgSrc : null)}; */
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => (props.imgSrc ? null : props.theme.lightGray)};

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

const ImageWrapper = styled.img`
  width: ${props => props.size * 8}rem;
  height: ${props => (props.size + 1) * 8}rem;
`;

export default ImageComp;
