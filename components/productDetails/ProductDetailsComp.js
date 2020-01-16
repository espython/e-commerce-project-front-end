import React, { Component } from 'react';
import Wrapper from './productDetailsStyles';
import ImgDetailsComp from './ImgDetailsComp';
import Details from './Details';

class ProductDetailsComp extends Component {
  render() {
    return (
      <Wrapper className="">
        <div className="row">
          {/* product images section  */}
          <ImgDetailsComp />
          {/* product details section */}
          <Details />
        </div>
        <div className="row">
          <p>reviews</p>
        </div>
      </Wrapper>
    );
  }
}

export default ProductDetailsComp;
