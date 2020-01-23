import React, { Component } from 'react';
import Wrapper from './addProductStyles';
import { ImageComp } from '../common';

class AddProductComp extends Component {
  render() {
    return (
      <Wrapper className="container">
        <div className="row justify-content-center">
          <div className="col col-sm-6 col-xs-12 d-flex flex-column justify-content-center">
            <ImageComp size={4} />

            <div className="row d-flex justify-content-around my-5 sm-images">
              {[...Array(4).keys()].map((item, index) => (
                <ImageComp size={1.2} key={index} />
              ))}
            </div>
          </div>
          <div className="col col-sm-6 col-xs-12 ">
            <form action="" className="">
              {/* category input group */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Category</label>
                <select
                  className="form-control px-3 form-control-lg"
                  id="exampleFormControlSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              {/* Name input */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />

                <small id="emailHelp" className="form-text text-muted">
                  please add a valid concise name.
                </small>
              </div>
              {/* devisions input group */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Devision</label>
                <div className="input-group mb-3">
                  <select
                    className="custom-select custom-select-lg"
                    id="inputGroupSelect02"
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="input-group-append">
                    <label
                      className="input-group-text custom-select-lg"
                      htmlFor="inputGroupSelect02"
                    >
                      Options
                    </label>
                  </div>
                </div>
              </div>
              {/* Product Description  */}
              <div className="form-group mt-5">
                <label htmlFor="exampleFormControlTextarea1">
                  Product Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default AddProductComp;
