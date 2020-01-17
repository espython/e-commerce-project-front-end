import React, { Component } from 'react';
import Wrapper from './productDetailsStyles';
import ImgDetailsComp from './ImgDetailsComp';
import Details from './Details';

class ProductDetailsComp extends Component {
  render() {
    return (
      <Wrapper className="container-fluid d-flex">
        
          {/* product images section  */}
          <ImgDetailsComp />
          {/* product details section */}
          <Details />
       
        
      </Wrapper>
    );
  }
}

export default ProductDetailsComp;
