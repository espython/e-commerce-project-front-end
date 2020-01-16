import React from 'react';
import { ButtonWrapper } from './buttonStyles';

export default function ButtonComp() {
  return (
    <ButtonWrapper>
      <span>Classic yet cool. Made for you.</span>
      <h1>{`Life is too short to wear boring clothes`.toUpperCase()}</h1>
      <button className="btn">Shop Now</button>
    </ButtonWrapper>
  );
}
