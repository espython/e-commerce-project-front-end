import React from 'react';

const imgStyles = {
  width: `100%`,
  height: 'auto'
};

function ImgComp({ src }) {
  return <img src={src} alt="slider-image" style={imgStyles}></img>;
}

export default ImgComp;
