import React, { Component } from 'react';
import { ProductCard } from '../components/common';
import Items from '../components/items/Items';
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h4>Home Page </h4>
        <Items />
      </div>
    );
  }
}
