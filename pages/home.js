import React, { Component } from 'react';
import { ProductCard } from '../components/common';
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h4>Home Page </h4>
        <ProductCard />
      </div>
    );
  }
}
