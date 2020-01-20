import React, { Component } from 'react';

import { BottomNavWrapper, ItemWrapper } from './BottomNavStyles';
// import DropDownMenu from '../../common/dropMenu/DropDownMenu';
import DropDownComp from '../../common/dropMenu/DropDownComp';

class BottomNav extends Component {
  state = {
    menuItems: []
  };
  render() {
    const { menuItems } = this.state;
    return (
      <BottomNavWrapper className="container-fluid justify-content-around">
        <ul className="nav justify-content-center">
          {menuItems.map((item, index) => (
            <ItemWrapper key={index}>
              <a className="nav-link" href="#">
                Winter 2020
              </a>
            </ItemWrapper>
          ))}
          <ItemWrapper>
            <a className="nav-link" href="#">
              Winter 2020
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link" href="#">
              Winter 2020
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link" href="#">
              Women
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link" href="#">
              Men
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Plus Size
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Bags
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Shoes
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Kids & Moms
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Accessories & Beauty
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Sales
            </a>
            <DropDownComp />
          </ItemWrapper>
          <ItemWrapper className="nav-item">
            <a className="nav-link active" href="#">
              Brands
            </a>
            <DropDownComp />
          </ItemWrapper>
        </ul>
      </BottomNavWrapper>
    );
  }
}

export default BottomNav;
