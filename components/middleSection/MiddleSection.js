import React, { Component } from 'react';

import Card from '../common/card/Card';
import AdvertiseRow from '../common/advertiseRow/AdvertiseRow';

class MiddleSection extends Component {
  render() {
    return (
      <div className="container">
        <AdvertiseRow />
        <div className="row">
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-1 col-lg-4">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleSection;
