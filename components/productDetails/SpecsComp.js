import React, { Component } from 'react';
import Styled from 'styled-components';
import {
  AiOutlineShopping,
  AiFillTwitterCircle,
  AiFillInstagram
} from 'react-icons/ai';
import { FaFacebook, FaPinterest, FaRegHeart } from 'react-icons/fa';

class SpecsComp extends Component {
  /**
   * state managment
   */
  state = {
    qtyCount: 0
  };

  addQty = () => {
    let { qtyCount } = this.state;
    qtyCount++;
    this.setState({ qtyCount });
  };

  removeQty = () => {
    let { qtyCount } = this.state;
    qtyCount > 0 ? qtyCount-- : (qtyCount = 0);
    this.setState({ qtyCount });
  };

  /**
   * render method
   */
  render() {
    const { qtyCount } = this.state;

    return (
      <Container className="container d-flex flex-column p-3 ">
        <div className="color row d-flex flex-row my-3 ml-3">
          <h3>Color:</h3>
          <div className="d-flex flex-row ml-5 px-3 justify-content-around">
            <button className="dot btn  bg-danger"></button>
            <button className="dot btn bg-secondary"></button>
            <button className="dot btn bg-dark"></button>
          </div>
        </div>
        <div className="row size d-flex flex-column my-3 ml-3">
          <h3>Size:</h3>
          <div className="sizes mx-5 my-4 pl-5 row">
            <button type="button" className="btn btn-outline-secondary">
              S/36
            </button>
            <button type="button" className="btn btn-outline-secondary">
              M/38
            </button>
            <button type="button" className="btn btn-outline-secondary">
              L/40
            </button>
            <button type="button" className="btn btn-outline-secondary">
              XL/42
            </button>
            <button type="button" className="btn btn-outline-secondary">
              XXL/44
            </button>
            <button type="button" className="btn btn-outline-secondary">
              XXXL/46
            </button>
          </div>
        </div>
        <div className="row ml-3 align-items-center">
          <h3>Qty:</h3>
          <div className="qty ml-5 d-flex justify-content-around align-items-center">
            <button
              className="btn btn-outline-secondary mx-3"
              onClick={this.removeQty}
            >
              &#45;
            </button>
            <p>{qtyCount}</p>
            <button
              className="btn btn-outline-secondary mx-3"
              onClick={this.addQty}
            >
              &#43;
            </button>
          </div>
          </div>
          <div className="row ml-5 px-5 mt-5 mb-3 d-flex justify-content-start align-items-center">
            <button className="heart mx-5 py-2 btn btn-lg  btn-outline-secondary"><FaRegHeart/></button>
            <button className="add-cart d-flex btn btn-lg btn-danger align-items-center justify-content-center">
              <span className="ml-3">
                <AiOutlineShopping />
              </span>

              <p>Add To Cart</p>
            </button>
          </div>
        <div className="row ml-3 align-items-center mt-3 share">
          <h3>Share:</h3>
          <div className="d-flex mx-5 px-3">
            <FaFacebook className="share-icon" />
            <AiFillTwitterCircle className="share-icon" />
            <AiFillInstagram className="share-icon" />
            <FaPinterest className="share-icon" />
          </div>
        </div>
      </Container>
    );
  }
}

const Container = Styled.div`
  .dot {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: inline-block;
    margin-right:1rem;
    &:focus{
      border:0.3rem solid ${props => props.theme.orange} !important;
    }
  }

  .sizes{
    .btn{
    font-size:2rem !important;
      margin-right:1rem;
      margin-bottom:1rem;
      border:0.2rem solid;
      &:focus{
        border:0.2rem solid ${props => props.theme.red} !important;
        box-shadow: 0px 0px 5px 4px ${props => props.theme.red} !important;
      }
   }
  }
  

  .qty{
    p{
      font-size:2.4rem;
      font-weight:500;
    }
    .btn{
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 50%;
      display: inline-block;
      text-align:center;
      font-size:2.4rem;
      font-weight:500;
      &:focus{
        border:0.2rem solid ${props => props.theme.red} !important;
        box-shadow: 0px 0px 5px 4px ${props => props.theme.red} !important;
        background-color: ${props => props.theme.mainDark} !important;
        color:${props => props.theme.mainLight} !important;
      }
      &:hover{
        border:0.2rem solid ${props => props.theme.red} !important;
        box-shadow: 0px 0px 5px 4px ${props => props.theme.red} !important;
        background-color: ${props => props.theme.mainDark} !important;
        color:${props => props.theme.mainLight} !important;
      }
    }
  }
  .heart{
    font-size:2rem;
    font-weight:500;
    border:0.2rem solid ;
    &:focus{
        border:0.2rem solid ${props => props.theme.red} !important;
        /* //box-shadow: 0px 0px 5px 4px ${props => props.theme.red} !important; */
        background-color: ${props => props.theme.red} !important;
        color:${props => props.theme.mainLight} !important;
      }
      &:hover{
        border:0.2rem solid ${props => props.theme.red} !important;
        /* box-shadow: 0px 0px 5px 4px ${props => props.theme.red} !important; */
        background-color: ${props => props.theme.red} !important;
        color:${props => props.theme.mainLight} !important;
      }
  }
  .add-cart{
    font-size:1.2rem;
    font-weight:500;
    text-transform: uppercase;
    span{
      font-size:2rem;
      margin-right:0.5rem;
      padding-bottom:0.4rem;
    }
  }

  .share{
    font-size:2.4rem;
    .share-icon{
      margin-right:1rem;
    }
  }
  

`;
export default SpecsComp;
