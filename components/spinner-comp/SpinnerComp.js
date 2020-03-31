import React from 'react';
import { SpinnerWrapper } from './spinnerCompStyles';

export default function SpinnerComp({ loading }) {
  return (
    <SpinnerWrapper>
      <div className="modal">
        <div className="modal-container">
          <div className="loading"></div>
        </div>
      </div>
    </SpinnerWrapper>
  );
}
