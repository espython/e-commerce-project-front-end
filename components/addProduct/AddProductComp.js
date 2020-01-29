import React, { Component } from 'react';
import { FaUpload } from 'react-icons/fa';
import gql from 'graphql-tag';

import Wrapper from './addProductStyles';
import { ImageComp } from '../common';
import ChooseCategoryComp from './ChooseCategoryComp';
import ChooseDivision from './ChooseDivision';
import { Mutation } from 'react-apollo';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $category: String!
    $division: String!
    $description: String!
    $image: String!
    $largeImage: String!
    $price: Int!
    $finalPrice: Int!
  ) {
    createItem(
      title: $title
      category: $category
      division: $division
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
      finalPrice: $finalPrice
    ) {
      id
    }
  }
`;

class AddProductComp extends Component {
  state = {
    title: '',
    category: '',
    division: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
    finalPrice: 0
  };
  // handl input changed Method
  handleChange = e => {
    const { name, type, value } = e.target;
    console.log('data', name, type, value);
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  // handleSubmit

  handleSubmit = async (e, createItem) => {
    e.preventDefault();
    const response = await createItem();

    console.log('submit State', response);
  };

  // render Method
  render() {
    const {
      title,
      price,
      division,
      category,
      image,
      largeImage,
      description,
      finalPrice
    } = this.state;

    console.log('state category', this.state);
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Wrapper className="container">
            <div className="row justify-content-center align-items-between">
              <div className="col col-sm-6 col-xs-12 d-flex flex-column justify-content-center">
                <ImageComp size={4} />

                <div className="row d-flex justify-content-around my-5 sm-images">
                  {[...Array(4).keys()].map((item, index) => (
                    <ImageComp size={1.2} key={index} />
                  ))}
                </div>
                {/* price part */}
                <form className="form-inline">
                  <div className="form-group">
                    <label htmlFor="text">Price:</label>
                    <input
                      onChange={this.handleChange}
                      name="price"
                      value={price}
                      type="number"
                      id="price"
                      placeholder="0.00"
                      className="form-control form-control-lg mx-sm-3"
                      aria-describedby="passwordHelpInline"
                    />
                    <big id="passwordHelpInline" className="text-muted">
                      $ please add your price
                    </big>
                  </div>

                  {/* final price  */}
                  <div className="form-group">
                    <label htmlFor="inputPassword6">Final Price:</label>
                    <input
                      name="finalPrice"
                      onChange={this.handleChange}
                      value={finalPrice}
                      type="number"
                      id="inputPassword6"
                      placeholder="0.00"
                      className="form-control form-control-lg mx-sm-3"
                      aria-describedby="passwordHelpInline"
                    />
                    <big id="passwordHelpInline" className="text-muted">
                      $ Final price
                    </big>
                  </div>
                </form>
              </div>
              <div className="col col-sm-6 col-xs-12 ">
                <form action="" className="">
                  {/* category input group */}
                  <ChooseCategoryComp handler={this.handleChange} />
                  {/* Name input */}
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product Name</label>
                    <input
                      name="title"
                      value={title}
                      onChange={this.handleChange}
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
                  <ChooseDivision
                    division={division}
                    handler={this.handleChange}
                  />
                  {/* Product Description  */}
                  <div className="form-group mt-5">
                    <label htmlFor="exampleFormControlTextarea1">
                      Product Description
                    </label>
                    <textarea
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                </form>
              </div>
              <button
                className="btn btn-danger mt-5 px-5 btn-lg d-flex align-items-center justify-content-between publish"
                type="button"
                onClick={e => this.handleSubmit(e, createItem)}
              >
                Publish
                <span className="ml-5 pb-2">
                  <FaUpload />
                </span>
              </button>
            </div>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}

export { CREATE_ITEM_MUTATION };

export default AddProductComp;
