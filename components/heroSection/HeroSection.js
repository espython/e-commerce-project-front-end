import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { HeroSectionWrapper } from './heroSectionStyles';
import ImgComp from './ImgComp';

const imgSliderList = [
  `https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
  `https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  `https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
];

export default class HeroSection extends Component {
  /**
   * defins our state
   */
  state = {
    x: 0
  };

  goLeft = x => {
    x === 0 ? (x = (imgSliderList.length - 1) * -100) : (x = x + 100);
    this.setState({ x });
  };

  goRight = x => {
    x === (imgSliderList.length - 1) * -100 ? (x = 0) : (x = x - 100);
    this.setState({ x });
  };

  // the slider List

  render() {
    console.log('list', this.sliderList);
    const { x } = this.state;
    return (
      <HeroSectionWrapper>
        {imgSliderList.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <ImgComp src={item} />
            </div>
          );
        })}
        <button id="goLeft" onClick={() => this.goLeft(x)}>
          <FaChevronLeft />
        </button>
        <button id="goRight" onClick={() => this.goRight(x)}>
          <FaChevronRight />
        </button>
      </HeroSectionWrapper>
    );
  }
}
