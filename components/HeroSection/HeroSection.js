import React, { Component } from 'react';

import Carousel from './Carousel';
import { HeroSectionWrapper } from './heroSectionStyles';

export default class HeroSection extends Component {
  render() {
    return (
      <HeroSectionWrapper>
        <Carousel />
      </HeroSectionWrapper>
    );
  }
}
