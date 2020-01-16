import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { HeroSectionWrapper } from './heroSectionStyles';
import ImgComp from './ImgComp';
import ButtonComp from '../button/ButtonComp';

const imgSliderList = [
  `https://images.pexels.com/photos/1051744/pexels-photo-1051744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  `https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
  `https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`,
  `https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  `https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80`,
  `https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`
];

const imagesComps = imgSliderList.map((item, index) => {
  return <ImgComp src={item} key={index} />;
});

export default class HeroSection extends Component {
  /**
   * defins our state
   */
  state = {
    x: 0
  };

  goLeft = () => {
    let { x } = this.state;
    const newx = (imgSliderList.length - 1) * -100;
    x === 0 ? this.setState({ x: newx }) : this.setState({ x: x + 100 });
  };

  goRight = () => {
    let { x } = this.state;
    x === -100 * (imgSliderList.length - 1)
      ? this.setState({ x: 0 })
      : this.setState({ x: x - 100 });
  };

  // the slider List

  render() {
    const { x } = this.state;
    console.log('x', x);
    return (
      <HeroSectionWrapper>
        {imagesComps.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}

        <button id="goLeft" onClick={this.goLeft}>
          <FaChevronLeft />
        </button>
        <button id="goRight" onClick={this.goRight}>
          <FaChevronRight />
        </button>
      </HeroSectionWrapper>
    );
  }
}
