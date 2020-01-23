import React, { Component } from 'react';
import AddProductComp from '../components/addProduct/AddProductComp';

class Addproduct extends Component {
  render() {
    return (
      <div className="container justify-content-center">
        <div className="row py-5 d-flex justify-content-center">
          <h2>Add Products to your Store</h2>
        </div>
        <div className="row">
          <AddProductComp />
        </div>
      </div>
    );
  }
}

export default Addproduct;
