import React from 'react';
import Styled from 'styled-components';

export default function ImgDetailsComp() {
  return (
    <StylesWrapper className="col col-lg-7">
      <div className="row">
        <div className="col col-lg-9">
          <img
            src="https://via.placeholder.com/600"
            className="img-fluid main-image"
            alt="Responsive image"
          />
        </div>
        <div className="col col-lg-3">
          {Array(4)
            .fill()
            .map((_, i) => (
              <img
                key={i}
                src="https://via.placeholder.com/150"
                alt="..."
                className="img-thumbnail"
              />
            ))}
        </div>
      </div>
    </StylesWrapper>
  );
}

const StylesWrapper = Styled.div`
.main-image{
    background-color: ${props => props.theme.lightGray};
    height:100%;
  }
  .img-thumbnail{
    margin-bottom:0.5rem;
    /* width:5.5rem;
    height:7.3rem; */
  }
`;
