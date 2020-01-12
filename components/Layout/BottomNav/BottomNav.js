import React, { Component } from 'react';

import { BottomNavWrapper } from './BottomNavStyles';

class BottomNav extends Component {
  render() {
    return (
      <BottomNavWrapper>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              New Weekly
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Winter 2020
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Women
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Men
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Plus Size
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Bags
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Shoes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Kids & Moms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Accessories & Beauty
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Sales
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Brands
            </a>
          </li>
        </ul>
      </BottomNavWrapper>
    );
  }
}

export default BottomNav;
