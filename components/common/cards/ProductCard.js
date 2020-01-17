import React, { useState } from 'react';
import Styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

export default function ProductCard() {
  const [showAddToCart, setShowAddToCart] = useState(true);

  return (
    <Wrapper className="card text-center">
      <div
        className="card-img-top img-holder d-flex justify-content-center align-items-end pb-5"
        src="https://via.placeholder.com/170x225"
        alt="Card image cap"
      // onMouseOver={() => setShowAddToCart(!showAddToCart)}
      // onMouseOut={() => setShowAddToCart(!showAddToCart)}
      >
        {showAddToCart ? <AddToCartBtn /> : null}
      </div>

      <div className="card-body">
        <p>White Dress</p>
        <h4>$30.00</h4>
      </div>
    </Wrapper>
  );
}

const Btn = () => (
  <a href="#" className="btn btn-danger">
    ADD TO CART
  </a>
);

const AddToCartBtn = () => (
  <div className="cart d-flex justify-content-around align-items-center">
    <div className="mr-3 px-1  heart">
      <FaRegHeart />
    </div>
    <Btn />
  </div>
);

const Wrapper = Styled.div`
  width: 18rem;
  .heart{
    width:3rem;
    height:3rem;
    font-size:1.5rem !important;
    background-color:${props => props.theme.lightGray};
    border-radius: 50%;;
    /* border:0.15rem solid ${props => props.theme.lightGray}; */
   
  }

  .img-holder{
    height:22.5rem;
    width:100%;
    background-image:url('https://via.placeholder.com/170x225');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .cart{
    /* color:red; */
  }
  .btn{
    font-size:1.2rem;
  }
  p{
    font-size:1.6rem;
  }
  h4{
    color:${props => props.theme.red};
  }
`;
