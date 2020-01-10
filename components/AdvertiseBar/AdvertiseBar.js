import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import Wrapper from './styles';

export default function AdvertiseBar() {
  return (
    <Wrapper className="d-flex justify-content-center align-items-center">
      <FaShippingFast className="mr-3 car" />
      <p>
        FREE SHIPPING ON ORDERS OF $50 OR MORE <a className="ml-5">DETAILS</a>
      </p>
    </Wrapper>
  );
}
