import React from 'react';
import Styled from 'styled-components';

export default function PriceComp() {
  return (
    <Wrapper className="d-flex justify-content-center align-items-center py-4">
      <div className="px-3 mx-3 text-secondary">$143.00</div>
      <div className="px-3 mx-3 text-danger">$99</div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
.text-secondary {
  text-decoration: line-through !important;
}
  
`;
